"use client";

import {
  UserPlus,
  BadgeCheck,
  ThumbsUp,
  MessageSquareText,
  ChartColumn,
} from "lucide-react";
import { WindowFrame, type WindowChrome } from "./WindowFrame";
import { LinkedInIcon } from "./AppIcons";

const experience = [
  {
    org: "Hostiggo",
    logo: "h",
    logoClass: "bg-[#e91e63] text-white",
    role: "Software Development Intern",
    meta: "Hostiggo · Apprenticeship",
    period: "Jan 2026 – Present · 7 mos",
    location: "New Delhi, Delhi, India · Hybrid",
    skills: "Prompt Engineering, Software Infrastructure and +2 skills",
  },
  {
    org: "House Of Sports",
    logo: "HOS",
    logoClass: "bg-white/10 text-white/80",
    role: "Frontend Developer",
    meta: "House Of Sports · Internship",
    period: "Aug 2024 – Jan 2026 · 1 yr 6 mos",
    location: "Delhi, India · Hybrid",
    skills: "Event Management, Public Speaking and +5 skills",
  },
  {
    org: "Army Public School",
    logo: "APS",
    logoClass: "bg-[#c2410c] text-white",
    role: "Head Boy",
    meta: "The Army Public School, Dhaula Kuan, New Delhi",
    period: "2023 – 2024 · 1 yr",
    location: "As Head Boy, I led student initiatives, represented the student body, and facilitated school events.",
    skills: "Management, Event Management and +3 skills",
  },
];

const education = [
  {
    org: "Maharaja Surajmal Institute Of Technology",
    logo: "MS",
    role: "Bachelor of Technology - BTech, Information Technology",
    period: "Aug 2024 – Oct 2028",
    detail: "Activities and societies: Football · SQL, Web Development and +2 skills",
  },
  {
    org: "The Army Public School, Dhaula Kuan, New Delhi",
    logo: "AP",
    role: "High School Diploma, Science",
    period: "2015 – 2024",
    detail: "Activities and societies: Football · Team Building, Team Leadership and +2 skills",
  },
];

const certifications = [
  {
    name: "Claude Code 101",
    org: "Anthropic",
    issued: "Issued Jun 2026",
    skill: "Project Planning",
  },
  {
    name: "AI Fluency: Framework & Foundations",
    org: "Anthropic",
    issued: "Issued Jun 2026",
    skill: "Artificial Intelligence (AI)",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mt-5 border-t border-white/10 pt-4 text-sm font-semibold text-white">
      {children}
    </h4>
  );
}

export function LinkedInApp({ chrome }: { chrome?: WindowChrome }) {
  return (
    <WindowFrame
      title="LinkedIn"
      icon={<span className="inline-block h-3.5 w-3.5"><LinkedInIcon /></span>}
      {...chrome}
      className="h-full"
    >
      {/* banner — mountain view like the real profile */}
      <div className="relative h-28 w-full shrink-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#aed4f5] via-[#d9ebf7] to-[#f5e9d4]" />
        <div className="absolute right-[18%] top-3 h-8 w-8 rounded-full bg-[#fff7e0] shadow-[0_0_24px_12px_rgba(255,244,200,0.9)]" />
        <div
          className="absolute inset-x-0 bottom-0 h-16 bg-[#5c7893]"
          style={{ clipPath: "polygon(0% 100%, 0% 62%, 12% 38%, 26% 58%, 38% 30%, 52% 55%, 66% 25%, 80% 50%, 92% 34%, 100% 48%, 100% 100%)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-10 bg-[#33495e]"
          style={{ clipPath: "polygon(0% 100%, 0% 55%, 15% 75%, 30% 45%, 47% 70%, 63% 40%, 78% 68%, 90% 50%, 100% 65%, 100% 100%)" }}
        />
        <div className="absolute bottom-0 left-6 h-14 w-1.5 rounded-t bg-[#1f2d3a]/70" />
        <div className="absolute bottom-6 left-0 right-0 h-1 bg-[#1f2d3a]/50" />
      </div>

      <div className="px-5 pb-5">
        <div className="-mt-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#1c1c1e] bg-gradient-to-br from-[#38506b] to-[#1d2a3a] text-2xl font-bold text-white">
          AA
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <h3 className="text-lg font-semibold text-white">Aryan Arora</h3>
          <BadgeCheck className="h-4 w-4 text-[#70b5f9]" />
          <span className="text-xs text-white/40">He/Him</span>
        </div>
        <p className="mt-1 text-sm leading-snug text-white/75">
          Maharaja Surajmal Institute of Technology&rsquo;28 || Information
          Technology
        </p>
        <p className="mt-1.5 text-xs text-white/40">
          Delhi, India ·{" "}
          <span className="font-medium text-[#70b5f9]">Contact info</span>
        </p>
        <p className="mt-0.5 text-xs font-medium text-[#70b5f9]">
          477 connections · 484 followers
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="https://www.linkedin.com/in/aryan-arora-a9281a319"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0a66c2] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#0a5cad]"
          >
            <UserPlus className="h-3.5 w-3.5" />
            Connect
          </a>
          <span className="inline-flex items-center rounded-full border border-white/25 px-4 py-1.5 text-sm font-medium text-white/80">
            Message
          </span>
          <span className="inline-flex items-center rounded-full border border-white/25 px-3 py-1.5 text-sm font-medium text-white/80">
            More
          </span>
        </div>

        <SectionTitle>Activity</SectionTitle>
        <div className="mt-2 rounded-lg border border-white/10 bg-white/5 p-3">
          <p className="text-xs text-white/45">
            Aryan Arora · <span className="text-white/35">7mo</span>
          </p>
          <p className="mt-1 text-[13px] leading-snug text-white/80">
            Had an incredible time at the Vibe Coding Hackathon organized by the
            Microsoft Student Chapter at Maharaja Surajmal Institute of
            Technology…
          </p>
          <div className="mt-2 flex items-center gap-4 text-xs text-white/45">
            <span className="inline-flex items-center gap-1">
              <ThumbsUp className="h-3.5 w-3.5" /> 39
            </span>
            <span className="inline-flex items-center gap-1">
              <MessageSquareText className="h-3.5 w-3.5" /> 10
            </span>
            <span className="inline-flex items-center gap-1">
              <ChartColumn className="h-3.5 w-3.5" /> 1,737 impressions
            </span>
          </div>
        </div>

        <SectionTitle>Experience</SectionTitle>
        <div className="mt-2 space-y-4">
          {experience.map((e) => (
            <div key={e.role} className="flex gap-3">
              <div
                className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded text-[11px] font-bold ${e.logoClass}`}
              >
                {e.logo}
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold leading-tight text-white">
                  {e.role}
                </p>
                <p className="text-xs text-white/60">{e.meta}</p>
                <p className="text-xs text-white/40">{e.period}</p>
                <p className="mt-0.5 text-xs leading-snug text-white/50">
                  {e.location}
                </p>
                <p className="mt-1 text-xs text-white/60">
                  <span className="font-semibold text-white/70">Skills:</span>{" "}
                  {e.skills}
                </p>
              </div>
            </div>
          ))}
        </div>

        <SectionTitle>Education</SectionTitle>
        <div className="mt-2 space-y-4">
          {education.map((e) => (
            <div key={e.org} className="flex gap-3">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/10 text-[11px] font-bold text-white/70">
                {e.logo}
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold leading-tight text-white">
                  {e.org}
                </p>
                <p className="text-xs text-white/60">{e.role}</p>
                <p className="text-xs text-white/40">{e.period}</p>
                <p className="mt-0.5 text-xs leading-snug text-white/50">
                  {e.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <SectionTitle>Licenses &amp; certifications</SectionTitle>
        <div className="mt-2 space-y-4">
          {certifications.map((c) => (
            <div key={c.name} className="flex gap-3">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white text-sm font-black text-black">
                A\
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold leading-tight text-white">
                  {c.name}
                </p>
                <p className="text-xs text-white/60">{c.org}</p>
                <p className="text-xs text-white/40">{c.issued}</p>
                <p className="mt-1 text-xs text-white/60">
                  <span className="font-semibold text-white/70">Skills:</span>{" "}
                  {c.skill}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WindowFrame>
  );
}
