"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

const BUSINESS_EMAIL = "office@dgrealtors.com";

export function InquiryForm({ initialProject = "" }: { initialProject?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      className="grid gap-5"
      onSubmit={async (event) => {
        event.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
          const formData = new FormData(event.currentTarget);
          const payload = {
            name: String(formData.get("name") ?? ""),
            phone: String(formData.get("phone") ?? ""),
            email: String(formData.get("email") ?? ""),
            project: String(formData.get("project") ?? ""),
            message: String(formData.get("message") ?? ""),
            _subject: `New enquiry from ${String(formData.get("name") ?? "")}`,
          };

          const response = await fetch(`https://formsubmit.co/ajax/${BUSINESS_EMAIL}`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            throw new Error("Unable to send enquiry.");
          }

          setSubmitted(true);
        } catch {
          setError("There was a problem sending your enquiry. Please try again or contact the office directly.");
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Phone Number" name="phone" required type="tel" />
      </div>
      <Field label="Email Address" name="email" required type="email" />
      <label className="grid gap-2 text-sm font-bold text-white">
        Project of Interest
        <select
          className="min-h-12 border border-white/20 bg-navy-deep px-4 text-mist outline-none focus:border-gold"
          defaultValue={initialProject}
          name="project"
        >
          <option value="">Select a project</option>
          {projects.map((project) => (
            <option key={project.id} value={project.name}>
              {project.name}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-white">
        Message
        <textarea className="min-h-32 border border-white/20 bg-navy-deep p-4 text-mist outline-none focus:border-gold" name="message" />
      </label>
      <Button className="w-full sm:w-fit" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </Button>
      {submitted ? (
        <p aria-live="polite" className="border border-gold/40 p-4 text-sm text-gold-light">
          Your enquiry has been sent successfully to {BUSINESS_EMAIL}.
        </p>
      ) : null}
      {error ? <p className="border border-red-500/60 p-4 text-sm text-red-300">{error}</p> : null}
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-white">
      {label}
      <input className="min-h-12 border border-white/20 bg-navy-deep px-4 text-mist outline-none focus:border-gold" name={name} required={required} type={type} />
    </label>
  );
}
