"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { key: "projects", value: 10, suffix: "+" },
  { key: "clients", value: 15, suffix: "+" },
  { key: "automations", value: 50, suffix: "+" },
  { key: "hoursSaved", value: 1000, suffix: "+" },
] as const;

const ANIMATION_DURATION = 2000;

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated, target]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold">
      {count}{suffix}
    </div>
  );
};

export const StatsSection = () => {
  const t = useTranslations("Stats");

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(({ key, value, suffix }) => (
              <div key={key}>
                <AnimatedCounter target={value} suffix={suffix} />
                <p className="text-sm text-muted-foreground mt-2">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
