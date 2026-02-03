import { Star } from "lucide-react";
import g2Logo from "@/assets/logos/g2-logo.svg";

interface G2BadgeProps {
  rating?: string;
}

export function G2Badge({ rating = "4.8 stars" }: G2BadgeProps) {
  return (
    <div className="g2-badge">
      <img src={g2Logo} alt="G2" className="g2-logo" />
      <div className="stars">
        <Star size={16} fill="#F5A623" stroke="#F5A623" />
        <Star size={16} fill="#F5A623" stroke="#F5A623" />
        <Star size={16} fill="#F5A623" stroke="#F5A623" />
        <Star size={16} fill="#F5A623" stroke="#F5A623" />
        <Star size={16} fill="#F5A623" stroke="#F5A623" />
      </div>
      <span className="rating-text">{rating}</span>
    </div>
  );
}
