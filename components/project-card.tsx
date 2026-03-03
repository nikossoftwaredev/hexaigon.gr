"use client";

import { ExternalLink } from "lucide-react";
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
    className="relative w-full rounded-xl border-[3px] border-neutral-700 bg-neutral-800 overflow-hidden aspect-9/19 shadow-2xl cursor-zoom-in"
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
      <div className="group glass glass-hover overflow-hidden">
        {/* Device mockups */}
        <div className="relative">
          {isMobileOnly ? (
            /* Mobile-only layout: centered phone */
            <div className="relative flex justify-center bg-neutral-900/50 py-6">
              <div className="relative w-[35%]">
                <PhoneFrame
                  src={project.mobileImage}
                  alt={`${project.title} - mobile`}
                  onPreview={() => setPreviewImage(project.mobileImage)}
                />
              </div>
            </div>
          ) : (
            /* Desktop screenshot - full bleed */
            <button
              onClick={() => setPreviewImage(project.desktopImage!)}
              className="relative w-full overflow-hidden aspect-16/10 cursor-zoom-in"
            >
              <Image
                src={project.desktopImage!}
                alt={`${project.title} - desktop`}
                fill
                className="object-cover object-top"
              />
            </button>
          )}
        </div>

        {/* Info */}
        <div className="p-5 flex items-center justify-between">
          <div>
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-xs text-muted-foreground">{project.description}</p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            title={project.url}
            className="p-2 rounded-lg text-muted-foreground hover:text-blue-400 hover:bg-white/5 transition-all"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
        <DialogContent className="max-w-4xl p-2 bg-neutral-900 border-neutral-700">
          <DialogTitle className="sr-only">{project.title}</DialogTitle>
          {previewImage && (
            <Image
              src={previewImage}
              alt={project.title}
              width={1440}
              height={900}
              className="w-full h-auto rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
