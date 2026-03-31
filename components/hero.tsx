"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const SPLINE_EMBED_URL =
  "https://my.spline.design/nexbotrobotcharacterconcept-1ge7skHgxJO0mPtoxGf8f1Vs/";

const ROTATION_KEYS = ["rotating1", "rotating2", "rotating3"] as const;
const TYPING_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_DURATION = 2000;

export const Hero = () => {
  const t = useTranslations("Hero");
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = t(ROTATION_KEYS[currentIndex]);

  const scrollTo = useCallback((id: string) => {
    window.history.pushState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % ROTATION_KEYS.length);
      }, 0);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayText((prev) => prev.slice(0, -1)),
        DELETE_SPEED
      );
    } else {
      timeout = setTimeout(
        () => setDisplayText(currentPhrase.slice(0, displayText.length + 1)),
        TYPING_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D background */}
      <iframe
        src={SPLINE_EMBED_URL}
        className="absolute inset-0 z-0 w-full h-full border-0"
        loading="lazy"
        title="3D Robot Background"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pointer-events-none">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          {t("line1")}{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className="animate-blink text-blue-400">|</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={() => scrollTo("contact")} className="gap-2 min-w-44">
            {t("cta")}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo("portfolio")}
            className="gap-2 min-w-44"
          >
            {t("ctaSecondary")}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
