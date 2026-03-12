"use client";

import { useRef, useCallback } from "react";
import { toPng } from "html-to-image";

const SERVICES = [
  "Websites",
  "Web Apps",
  "AI Automations",
  "Digital Ads",
  "SEO & AEO",
  "Custom Software",
];

const HexagonIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="hex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <polygon
      points="50,3 93,28 93,72 50,97 7,72 7,28"
      fill="url(#hex-grad)"
    />
  </svg>
);

const HexagonIconBack = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="hex-grad-back"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <polygon
      points="50,3 93,28 93,72 50,97 7,72 7,28"
      fill="url(#hex-grad-back)"
    />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width={20} height={16} x={2} y={4} rx={2} />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const download = (dataUrl: string, filename: string) => {
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  link.click();
};

export default function BusinessCardPage() {
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const downloadCard = useCallback(
    async (ref: React.RefObject<HTMLDivElement | null>, filename: string) => {
      if (!ref.current) return;
      // High-res: 4x scale for print quality (1344x768 at 384 DPI)
      const dataUrl = await toPng(ref.current, {
        pixelRatio: 4,
        cacheBust: true,
      });
      download(dataUrl, filename);
    },
    [],
  );

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center gap-8 p-8 print:bg-white print:p-0 print:gap-4">
      <style>{`
        @media print {
          @page { margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
        }
      `}</style>

      <p className="text-sm text-neutral-500 no-print">
        Standard business card: 3.5&quot; &times; 2&quot; (89mm &times; 51mm)
      </p>

      {/* FRONT */}
      <div
        ref={frontRef}
        className="relative overflow-hidden bg-[#0a0a0a] text-white rounded-lg shadow-2xl"
        style={{ width: "3.5in", height: "2in" }}
      >
        {/* Subtle hex pattern watermark */}
        <div className="absolute -right-6 -bottom-6 opacity-[0.04]">
          <HexagonIcon className="w-40 h-40" />
        </div>

        <div className="relative h-full flex flex-col justify-between p-5">
          {/* Logo + name */}
          <div className="flex items-center gap-2">
            <HexagonIcon className="w-5 h-5" />
            <span className="text-base font-bold tracking-tight">
              hex<span className="text-blue-500">AI</span>gon
            </span>
          </div>

          {/* Tagline */}
          <p className="text-[9px] text-neutral-400 leading-tight max-w-[70%]">
            AI-Powered Web Development
            <br />& Automation Solutions
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <MailIcon className="w-2.5 h-2.5 text-blue-400" />
              <span className="text-[8px] text-neutral-300">
                hexaigonsoftwaresolutions@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <GlobeIcon className="w-2.5 h-2.5 text-blue-400" />
                <span className="text-[8px] text-neutral-300">
                  hexaigon.gr
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <InstagramIcon className="w-2.5 h-2.5 text-blue-400" />
                <span className="text-[8px] text-neutral-300">
                  @hexaigon.gr
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Blue accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-blue-700" />
      </div>

      <button
        onClick={() => downloadCard(frontRef, "hexaigon-card-front.png")}
        className="no-print px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Download Front as PNG
      </button>

      {/* BACK */}
      <div
        ref={backRef}
        className="relative overflow-hidden bg-[#0a0a0a] text-white rounded-lg shadow-2xl"
        style={{ width: "3.5in", height: "2in" }}
      >
        {/* Large watermark hex */}
        <div className="absolute -left-10 -top-10 opacity-[0.04]">
          <HexagonIconBack className="w-44 h-44" />
        </div>

        <div className="relative h-full flex flex-col justify-between p-5">
          {/* Header */}
          <div>
            <p className="text-[9px] font-semibold text-blue-400 uppercase tracking-[0.2em] mb-3">
              What We Build
            </p>

            {/* Services grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
              {SERVICES.map((service) => (
                <div key={service} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-[8.5px] text-neutral-300">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom brand */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <HexagonIconBack className="w-3.5 h-3.5" />
              <span className="text-[8px] font-semibold text-neutral-500">
                hex<span className="text-blue-500/60">AI</span>gon
              </span>
            </div>
            <span className="text-[7px] text-neutral-600">hexaigon.gr</span>
          </div>
        </div>

        {/* Blue accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-700 to-blue-500" />
      </div>

      <button
        onClick={() => downloadCard(backRef, "hexaigon-card-back.png")}
        className="no-print px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Download Back as PNG
      </button>
    </div>
  );
}
