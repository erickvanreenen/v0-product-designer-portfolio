import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { ArrowRight } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Research",
    description: "Understanding users, business goals, and market context",
  },
  {
    step: "02",
    title: "Define",
    description: "Synthesizing insights into clear problem statements",
  },
  {
    step: "03",
    title: "Ideate",
    description: "Exploring multiple solutions through divergent thinking",
  },
  {
    step: "04",
    title: "Prototype",
    description: "Creating tangible representations to test concepts",
  },
  {
    step: "05",
    title: "Test",
    description: "Validating solutions with real users",
  },
  {
    step: "06",
    title: "Iterate",
    description: "Refining based on feedback and learnings",
  },
];

const credibilityItems = [
  "E-commerce across 3+ brands",
  "App launch from inception",
  "Team leadership & mentoring",
  "UX education & teaching",
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-foreground max-w-3xl text-balance">
            Fusing user needs with business outcomes, through research, data, empathy and design.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-accent hover:shadow-md transition-all duration-200 group"
            >
              View case studies
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-muted hover:border-foreground transition-all duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Selected work</h2>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center gap-1 group"
            >
              View all
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-16 md:py-24 border-t border-border/50 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-12">How I work</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="group p-6 rounded-sm border border-transparent hover:border-border/50 hover:bg-background transition-all duration-200">
                <span className="text-xs text-accent font-medium">{step.step}</span>
                <h3 className="text-lg font-medium text-foreground mt-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="py-16 md:py-20 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {credibilityItems.map((item) => (
              <span
                key={item}
                className="text-sm text-muted-foreground font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-4">Contact</p>
            <h2 className="text-2xl md:text-3xl font-normal text-foreground text-balance leading-snug">
              If you would like to discuss a project or just say hi, I&apos;m always
              open to chat.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-accent hover:shadow-md transition-all duration-200 mt-8 group"
            >
              Get in touch
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
