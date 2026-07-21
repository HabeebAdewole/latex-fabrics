import type { ReactNode } from "react";

/** Shared empty/illustration state (SCR-002-EMPTY, SCR-004-EMPTY, SCR-005-EMPTY, SCR-007-EMPTY). */
export default function EmptyState({
  icon,
  title,
  body,
  children,
}: {
  icon: ReactNode;
  title: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-20 text-center">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
        {icon}
      </div>
      <h2 className="font-serif text-xl font-bold text-brand-charcoal">
        {title}
      </h2>
      {body && (
        <p className="max-w-sm text-sm leading-relaxed text-brand-muted">{body}</p>
      )}
      {children}
    </div>
  );
}
