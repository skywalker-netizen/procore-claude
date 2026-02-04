import { ReactNode } from "react";

interface FeatureItemProps {
  icon: ReactNode;
  iconColor?: "beige" | "blue" | "lime" | "green" | "red" | "tan" | "orange";
  title: string;
  description: string;
  variant?: "numbered" | "block" | "trade";
  titleOnly?: boolean;
}

export function FeatureItem({ icon, iconColor = "beige", title, description, variant = "numbered", titleOnly }: FeatureItemProps) {
  if (variant === "trade") {
    return (
      <div className="trade-feature">
        <div className="trade-feature-icon">{icon}</div>
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  if (variant === "block") {
    return (
      <div className="feature-block">
        <div className={`feature-block-icon circle ${iconColor}`}>{icon}</div>
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="numbered-feature">
      <div className={`numbered-feature-icon ${iconColor}`}>{icon}</div>
      <div>
        {titleOnly ? (
          <p className="feature-title-text">{title}</p>
        ) : (
          <>
            {title && <h4>{title}</h4>}
            {description && <p>{description}</p>}
          </>
        )}
      </div>
    </div>
  );
}
