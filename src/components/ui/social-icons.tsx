type IconProps = {
  className?: string;
  title?: string;
};

export function MailIcon({ className, title }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : "presentation"}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M4 6.5H20V17.5H4V6.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className, title }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : "presentation"}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M7.8 19.4L8.6 16.6C6.7 15.2 5.5 12.9 5.5 10.3C5.5 6.3 8.8 3 12.8 3C16.8 3 20 6.3 20 10.3C20 14.3 16.8 17.6 12.8 17.6C11.3 17.6 9.8 17.2 8.6 16.4L7.8 19.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10.4 8.9C10.7 10.1 11.8 11.3 13.1 11.7L14.1 11.9C14.4 12 14.6 12.3 14.5 12.7C14.3 13.2 13.8 13.7 13.2 13.8C11.7 14.1 9.6 12.7 9 10.6C8.7 9.6 9.1 8.6 9.8 8.1C10.1 7.9 10.5 8 10.6 8.4L10.4 8.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BehanceIcon({ className, title }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : "presentation"}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M7 9H12.2C13.4 9 14.4 9.9 14.4 11.1C14.4 12.1 13.7 12.9 12.8 13.1C14.1 13.3 15 14.2 15 15.6C15 17 13.8 18 12.3 18H7V9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 11.2H11.8C12.5 11.2 13.1 11.7 13.1 12.5C13.1 13.2 12.6 13.8 11.8 13.8H9.2V11.2Z"
        fill="currentColor"
      />
      <path
        d="M18.2 12.3C18.2 10.8 17.1 9.7 15.6 9.7C14.2 9.7 13.1 10.8 13.1 12.3C13.1 13.9 14.2 15 15.6 15C16.6 15 17.5 14.4 17.9 13.5H18.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14.4 6H18.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
