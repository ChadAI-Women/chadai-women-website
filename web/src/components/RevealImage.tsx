import { useState } from "react";
import { cn } from "@/lib/utils";

type RevealImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** Classe appliquée au conteneur (placeholder + overflow). */
  wrapperClassName?: string;
};

/**
 * Image qui apparaît en fondu une fois chargée, posée sur un fond teinté.
 * Évite le « bloc blanc » pendant le lazy-loading : tant que l'image n'est
 * pas décodée, on voit un aplat doux aux couleurs de la marque, pas du vide.
 */
export const RevealImage = ({
  className,
  wrapperClassName,
  onLoad,
  ...props
}: RevealImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={cn("block overflow-hidden bg-primary/5", wrapperClassName)}>
      <img
        {...props}
        loading={props.loading ?? "lazy"}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          className,
          // Placé après className pour que la propriété transitionnée inclue
          // bien l'opacité même si le consommateur passe `transition-transform`.
          "transition-[opacity,transform] ease-out",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
    </span>
  );
};
