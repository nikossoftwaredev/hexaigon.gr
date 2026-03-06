"use client";

import { Globe } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { type Project } from "@/lib/data/projects";

interface PhoneFrameProps {
  src: string;
  alt: string;
  onPreview: () => void;
}

const PhoneFrame = ({ src, alt, onPreview }: PhoneFrameProps) => (
  <button
    onClick={onPreview}
    className="relative w-full rounded-xl border-[3px] border-neutral-700 bg-neutral-800 overflow-hidden aspect-9/19 shadow-2xl cursor-pointer active:scale-95 transition-transform duration-200"
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[6%] bg-neutral-800 rounded-b-lg z-10" />
    <Image src={src} alt={alt} fill className="object-cover object-top" />
  </button>
);

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const isMobileOnly = !project.desktopImage;

  return (
    <>
      <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/25 transition-all duration-500 hover:shadow-[0_0_40px_rgba(100,140,255,0.08)]">
        {/* Device mockups */}
        <div className="relative px-8 pt-10 pb-6">
          {/* Colored glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700" />

          {isMobileOnly ? (
            /* Mobile-only layout: centered phone */
            <div className="relative flex justify-center">
              <div className="relative w-[30%] group-hover:scale-[1.03] transition-transform duration-500">
                <PhoneFrame
                  src={project.mobileImage}
                  alt={`${project.title} - mobile`}
                  onPreview={() => setPreviewImage(project.mobileImage)}
                />
              </div>
            </div>
          ) : (
            /* Desktop + mobile layout */
            <div className="relative flex items-end justify-center group-hover:scale-[1.02] transition-transform duration-500">
              {/* Laptop frame */}
              <div className="relative w-[78%]">
                <button
                  onClick={() => setPreviewImage(project.desktopImage!)}
                  className="relative w-full rounded-t-lg border-[3px] border-b-0 border-neutral-700 bg-neutral-800 overflow-hidden aspect-16/10 cursor-pointer active:scale-95 transition-transform duration-200"
                >
                  <Image
                    src={project.desktopImage!}
                    alt={`${project.title} - desktop`}
                    fill
                    className="object-cover object-top"
                  />
                </button>
                <div className="relative h-3 bg-neutral-700 rounded-b-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-neutral-600 rounded-b-sm" />
                </div>
              </div>

              {/* Phone frame - overlaid right */}
              <div className="relative -ml-[14%] mb-1 w-[20%] z-10">
                <PhoneFrame
                  src={project.mobileImage}
                  alt={`${project.title} - mobile`}
                  onPreview={() => setPreviewImage(project.mobileImage)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="px-8 pb-6 pt-2 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
            <p className="text-sm text-muted-foreground mt-0.5">{project.description}</p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            title={project.url}
            className="shrink-0 p-2.5 rounded-xl text-muted-foreground hover:text-blue-400 hover:bg-white/5 transition-all duration-300"
          >
            <Globe className="h-5 w-5" />
          </a>
        </div>
      </div>

      <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
        <DialogContent
          showCloseButton={false}
          className="bg-neutral-950! p-0! gap-0! max-w-6xl w-[95vw] border-neutral-800 rounded-2xl overflow-hidden"
        >
          <DialogTitle className="sr-only">{project.title}</DialogTitle>

          {/* Custom close button */}
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/80 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {previewImage && (
            <Image
              src={previewImage}
              alt={project.title}
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
