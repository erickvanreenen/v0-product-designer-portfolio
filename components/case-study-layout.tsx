"use client";

import React from "react"

import { Project } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

interface CaseStudyLayoutProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-12 md:py-16 border-t border-border/50">
      <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-6">{title}</h2>
      <div className="prose prose-neutral max-w-none">{children}</div>
    </section>
  );
}

export function CaseStudyLayout({
  project,
  nextProject,
  prevProject,
}: CaseStudyLayoutProps) {
  const sections = [
    { id: "context", label: "Context" },
    { id: "goals", label: "Goals" },
    { id: "research", label: "Research" },
    { id: "insights", label: "Insights" },
    { id: "ia-flows", label: "IA & Flows" },
    { id: "design", label: "Design" },
    { id: "testing", label: "Testing" },
    { id: "outcome", label: "Outcome" },
    { id: "learnings", label: "Learnings" },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back to projects
        </Link>

        {/* Hero Section */}
        <header className="pb-12 md:pb-16">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-[#3B2E1E] text-[#FFF2CA] rounded-sm transition-colors duration-200 hover:bg-[#C65D3B] hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 text-balance">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {project.summary}
          </p>
          
          {project.externalLink && (
            <Link
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#3B2E1E] text-[#FFF2CA] text-sm font-medium rounded-sm hover:bg-[#C65D3B] hover:text-white hover:shadow-md transition-all duration-200 group"
            >
              View Interactive Experience
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          )}
        </header>

        {/* Main Content with Sticky Sidebar */}
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
          {/* Main Content */}
          <div>
            {/* Project Image Placeholder */}
            <div className="aspect-video bg-card border border-border/50 rounded-sm flex items-center justify-center text-muted-foreground/40 mb-12">
              {project.title} - Hero Image
            </div>

            {/* Quick Stats */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/50 mb-8">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">Role</p>
                <p className="text-sm text-foreground">{project.role}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">Team</p>
                <p className="text-sm text-foreground">{project.team}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">Timeline</p>
                <p className="text-sm text-foreground">{project.timeline}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">Tools</p>
                <p className="text-sm text-foreground">
                  {project.tools.join(", ")}
                </p>
              </div>
            </div>

            {/* Key Outcomes */}
            <div className="py-8 bg-card border border-border/50 rounded-sm px-6 mb-8">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-4">Key Outcomes</p>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground flex items-start gap-2"
                  >
                    <span className="text-accent mt-1">•</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Sections */}
            <Section id="context" title="Context">
              <p className="text-foreground leading-relaxed">{project.context}</p>
            </Section>

            <Section id="goals" title="Goals">
              <ul className="space-y-2">
                {project.goals.map((goal, i) => (
                  <li
                    key={i}
                    className="text-foreground flex items-start gap-2"
                  >
                    <span className="text-muted-foreground mt-1">•</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="research" title="Research">
              <p className="text-foreground leading-relaxed">{project.research}</p>
              {project.images[0] && (
                <div className="mt-8">
                  <div
                    className={`bg-muted rounded-lg flex items-center justify-center text-muted-foreground/40 ${project.images[0].wide ? "aspect-[21/9]" : "aspect-video"}`}
                  >
                    {project.images[0].caption}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {project.images[0].caption}
                  </p>
                </div>
              )}
            </Section>

            <Section id="insights" title="Key Insights">
              <ul className="space-y-3">
                {project.insights.map((insight, i) => (
                  <li
                    key={i}
                    className="text-foreground flex items-start gap-3"
                  >
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-sm flex-shrink-0 font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {insight}
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="ia-flows" title="Information Architecture & Flows">
              <p className="text-foreground leading-relaxed">{project.iaFlows}</p>
              {project.images[1] && (
                <div className="mt-8">
                  <div
                    className={`bg-muted rounded-lg flex items-center justify-center text-muted-foreground/40 ${project.images[1].wide ? "aspect-[21/9]" : "aspect-video"}`}
                  >
                    {project.images[1].caption}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {project.images[1].caption}
                  </p>
                </div>
              )}
            </Section>

            <Section id="design" title="Design Exploration & Final UI">
              <p className="text-foreground leading-relaxed mb-8">
                {project.designExploration}
              </p>
              <p className="text-foreground leading-relaxed">{project.finalUI}</p>
              {project.images[2] && (
                <div className="mt-8">
                  <div
                    className={`bg-muted rounded-lg flex items-center justify-center text-muted-foreground/40 ${project.images[2].wide ? "aspect-[21/9]" : "aspect-video"}`}
                  >
                    {project.images[2].caption}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {project.images[2].caption}
                  </p>
                </div>
              )}
            </Section>

            <Section id="testing" title="Testing & Validation">
              <p className="text-foreground leading-relaxed">{project.testing}</p>
            </Section>

            <Section id="outcome" title="Outcome">
              <p className="text-foreground leading-relaxed">{project.outcome}</p>
            </Section>

            <Section id="learnings" title="Key Learnings">
              <ul className="space-y-2">
                {project.learnings.map((learning, i) => (
                  <li
                    key={i}
                    className="text-foreground flex items-start gap-2"
                  >
                    <span className="text-muted-foreground mt-1">•</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Sticky Sidebar - Desktop Only */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-4">On this page</p>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200 py-1"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>

        {/* Next/Prev Navigation */}
        <nav className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform duration-200"
                />
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Previous</p>
                  <p className="text-sm group-hover:text-accent transition-colors duration-200">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 sm:text-right"
              >
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Next</p>
                  <p className="text-sm group-hover:text-accent transition-colors duration-200">{nextProject.title}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
