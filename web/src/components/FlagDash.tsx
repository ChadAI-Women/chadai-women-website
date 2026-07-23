import { cn } from "@/lib/utils";

/**
 * Signature graphique ChadAI Women : trois tirets aux couleurs du drapeau
 * tchadien (bleu, or, rouge). Utilisé comme marqueur d'identité sous les
 * titres et dans les badges, à la place d'icônes décoratives génériques.
 */
export const FlagDash = ({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) => (
  <span
    aria-hidden
    className={cn(
      "inline-flex items-center",
      size === "sm" ? "gap-1" : "gap-1.5",
      className
    )}
  >
    <span
      className={cn(
        "rounded-full bg-primary",
        size === "sm" ? "h-[3px] w-4" : "h-1 w-7"
      )}
    />
    <span
      className={cn(
        "rounded-full bg-secondary",
        size === "sm" ? "h-[3px] w-4" : "h-1 w-7"
      )}
    />
    <span
      className={cn(
        "rounded-full bg-destructive",
        size === "sm" ? "h-[3px] w-4" : "h-1 w-7"
      )}
    />
  </span>
);
