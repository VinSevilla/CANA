import { CONFIRM_LABEL, type Copy } from "../_content/site";

/**
 * Renders confirmed copy as-is, or a visible [CONFIRM WITH CANA: …] marker.
 * The dashed border uses `currentColor`, so it works on light and dark
 * backgrounds without a variant.
 */
export function CopyText({ value }: { value: Copy }) {
  if (typeof value === "string") return <>{value}</>;
  return (
    <span className="rounded border border-dashed border-current px-1.5 py-0.5 text-[0.9em]">
      [{CONFIRM_LABEL}: {value.confirm}]
    </span>
  );
}
