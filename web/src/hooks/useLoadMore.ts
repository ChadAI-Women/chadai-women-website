import { useEffect, useState } from "react";

/**
 * Pagination progressive « Voir plus ».
 * Affiche `step` éléments, puis `step` de plus à chaque clic.
 * Le compteur se réinitialise quand `resetKey` change (ex. filtre/recherche).
 */
export function useLoadMore<T>(items: T[], step = 9, resetKey?: unknown) {
  const [count, setCount] = useState(step);

  useEffect(() => {
    setCount(step);
  }, [resetKey, step]);

  const visible = items.slice(0, count);
  const hasMore = count < items.length;
  const remaining = Math.max(items.length - count, 0);
  const showMore = () => setCount((c) => Math.min(c + step, items.length));

  return { visible, hasMore, remaining, showMore };
}
