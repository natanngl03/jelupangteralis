import { useEffect, useRef, useState } from "react";
type Props = { end: number; duration?: number; suffix?: string };
function formatCounter(value: number, suffix: string) {
   if (value >= 1000) {
      const result = value / 1000;
      return `${Number(result.toFixed(1)).toLocaleString("id-ID")}rb${suffix}`;
   }
   return `${value.toLocaleString("id-ID")}${suffix}`;
}
function easeOut(t: number) {
   return 1 - Math.pow(1 - t, 3);
}
export default function Counter({ end, duration = 1500, suffix = "" }: Props) {
   const [count, setCount] = useState(0);
   const [finished, setFinished] = useState(false);
   const ref = useRef<HTMLParagraphElement>(null);
   useEffect(() => {
      const element = ref.current;
      if (!element) return;
      let started = false;
      let animationFrame = 0;
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (!entry.isIntersecting || started) return;
            started = true;
            const startTime = performance.now();
            const animate = (currentTime: number) => {
               const progress = Math.min((currentTime - startTime) / duration, 1);
               const easedProgress = easeOut(progress);
               const currentValue = Math.floor(easedProgress * end);
               setCount(currentValue);
               if (progress < 1) {
                  animationFrame = requestAnimationFrame(animate);
               } else {
                  setCount(end);
                  setFinished(true);
               }
            };
            animationFrame = requestAnimationFrame(animate);
         },
         { threshold: 0.5 },
      );
      observer.observe(element);
      return () => {
         observer.disconnect();
         cancelAnimationFrame(animationFrame);
      };
   }, [end, duration]);
   return (
      <p ref={ref} className="m-0 display-2 fw-bolder">
         {finished ? formatCounter(end, suffix) : count.toLocaleString("id-ID")}{" "}
      </p>
   );
}
