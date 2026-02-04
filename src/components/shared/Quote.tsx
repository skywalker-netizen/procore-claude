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
      <blockquote className="whitespace-pre-line">{text}</blockquote>
      <cite className="quote-citation-uniform flex flex-col">
        <strong>{author}</strong>
        <span>{title}</span>
      </cite>
    </div>
  );
}
