interface SyncBadgeProps {
  text?: string;
}

export function SyncBadge({ text = "SYNCED WITH THE FIELD" }: SyncBadgeProps) {
  return (
    <div className="badge">
      <span className="badge-dot"></span>{text}
    </div>
  );
}
