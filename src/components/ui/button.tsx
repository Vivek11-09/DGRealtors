import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  variant?: "gold" | "outline";
  href?: string;
};

const styles = {
  gold: "bg-gold text-navy hover:bg-gold-light focus-visible:outline-gold-light",
  outline: "border border-gold/70 text-gold-light hover:border-gold-light hover:bg-gold-light/10 focus-visible:outline-gold-light",
};

export function Button({ children, className = "", variant = "gold", href, ...props }: ButtonProps) {
  const shared = `inline-flex min-h-11 items-center justify-center px-5 font-sans text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${styles[variant]} ${className}`;

  if (href) {
    return <Link className={shared} href={href}>{children}</Link>;
  }

  return <button className={shared} type="button" {...props}>{children}</button>;
}
