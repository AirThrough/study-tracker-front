import type { SVGProps } from "react";

type FlagProps = SVGProps<SVGSVGElement>;

export const FlagEn = (props: FlagProps) => (
  <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>English</title>
    <path fill="#012169" d="M0 0h60v40H0z" />
    <path stroke="#fff" strokeWidth="8" d="M0 0l60 40M60 0L0 40" />
    <path stroke="#C8102E" strokeWidth="5" d="M0 0l60 40M60 0L0 40" />
    <path stroke="#fff" strokeWidth="13" d="M30 0v40M0 20h60" />
    <path stroke="#C8102E" strokeWidth="8" d="M30 0v40M0 20h60" />
  </svg>
);

export const FlagRu = (props: FlagProps) => (
  <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Русский</title>
    <path fill="#fff" d="M0 0h60v40H0z" />
    <path fill="#0039A6" d="M0 13.33h60v13.34H0z" />
    <path fill="#D52B1E" d="M0 26.67h60V40H0z" />
  </svg>
);

export const FlagJa = (props: FlagProps) => (
  <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>日本語</title>
    <path fill="#fff" stroke="#e5e5e5" strokeWidth="1" d="M0.5 0.5h59v39H0.5z" />
    <circle cx="30" cy="20" r="12" fill="#BC002D" />
  </svg>
);
