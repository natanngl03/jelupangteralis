// import { useEffect, useRef, type ReactNode } from "react";
// import Masonry from "masonry-layout";

// interface MasonryGridProps {
//    children: ReactNode;
//    className?: string;
//    options?: Masonry.Options;
// }

// export default function MasonryGrid({ children, className = "", options = {} }: MasonryGridProps) {
//    const gridRef = useRef<HTMLDivElement>(null);

//    useEffect(() => {
//       const grid = gridRef.current;
//       if (!grid) return;

//       const masonry = new Masonry(grid, {
//          itemSelector: ".masonry-item",
//          percentPosition: true,
//          ...options,
//       });

//       return () => {
//          masonry?.destroy?.();
//       };
//    }, [options]);

//    return (
//       <div ref={gridRef} className={className}>
//          {children}
//       </div>
//    );
// }

// import { useEffect, useRef, type ReactNode } from "react";

// interface MasonryGridProps {
//    children: ReactNode;
//    className?: string;
// }

// export default function MasonryGrid({ children, className = "" }: MasonryGridProps) {
//    const gridRef = useRef<HTMLDivElement>(null);

//    useEffect(() => {
//       let masonry: { destroy?: () => void } | undefined;
//       let cancelled = false;

//       async function initMasonry() {
//          const grid = gridRef.current;
//          if (!grid) return;

//          const { default: Masonry } = await import("masonry-layout");

//          if (cancelled) return;

//          masonry = new Masonry(grid, {
//             itemSelector: ".masonry-item",
//             percentPosition: true,
//          });
//       }

//       void initMasonry();

//       return () => {
//          cancelled = true;
//          masonry?.destroy?.();
//       };
//    }, []);

//    return (
//       <div ref={gridRef} className={className}>
//          {children}
//       </div>
//    );
// }

import { useEffect, useRef, type ReactNode } from "react";
import imagesLoaded from "imagesloaded";

interface MasonryGridProps {
   children: ReactNode;
   className?: string;
}

export default function MasonryGrid({ children, className = "" }: MasonryGridProps) {
   const gridRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      // const grid = gridRef.current;

      // if (grid === null) return;

      const grid = gridRef.current as HTMLDivElement | null;
      if (grid === null) return;

      let cancelled = false;

      let masonry:
         | {
              destroy?: () => void;
              layout?: () => void;
           }
         | undefined;
      let unsubscribe: (() => void) | undefined;

      async function init() {
         const { default: Masonry } = await import("masonry-layout");

         if (cancelled) return;

         masonry = new Masonry(grid!, {
            itemSelector: ".masonry-item",
            percentPosition: true,
         });

         const imgLoad = imagesLoaded(grid!);

         const onImagesLoaded = () => {
            masonry?.layout?.();
         };

         imgLoad.on("always", onImagesLoaded);

         unsubscribe = () => {
            imgLoad.off("always", onImagesLoaded);
         };

         masonry?.layout?.();
      }

      void init();

      return () => {
         cancelled = true;
         unsubscribe?.();
         masonry?.destroy?.();
      };
   }, []);

   return (
      <div ref={gridRef} className={className}>
         {children}
      </div>
   );
}
