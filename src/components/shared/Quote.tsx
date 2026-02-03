interface QuoteProps {
  text: string;
  author: string;
  title: string;
  variant?: "light" | "dark";
  className?: string;
}

export function Quote({ text, author, title, variant = "light", className = "" }: QuoteProps) {
  return (
    <div className={`executive-quote ${variant === "dark" ? "dark" : ""} ${className}`}>
      <blockquote>{text}</blockquote>
      <cite>
        <strong>{author}</strong>, {title}
      </cite>
    </div>
  );
}
