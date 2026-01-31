import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Erick van Reenen",
  description:
    "Learn more about Erick van Reenen, an experienced UX/UI Designer based in Cape Town with a background in e-commerce, product design, and team leadership.",
};

const skills = [
  "User Research",
  "UX Strategy",
  "Information Architecture",
  "Wireframing & Prototyping",
  "UI Design",
  "Design Systems",
  "Usability Testing",
  "Data Visualization",
  "Content Design",
  "CX Design",
];

const tools = [
  "Figma",
  "Adobe Creative Suite",
  "Miro",
  "Jira",
  "Articulate 360",
  "Google Suite",
  "Office Suite",
];

const waysOfWorking = [
  {
    title: "Research-Driven",
    description:
      "I embrace research as an essential tool for uncovering user needs, shaping experiences that resonate with their motivations and aspirations.",
  },
  {
    title: "Collaborative",
    description:
      "I work closely with cross-functional teams, from developers to product managers, ensuring alignment between business goals and user needs.",
  },
  {
    title: "Iterative",
    description:
      "Design is never finished. I believe in continuous improvement through testing, feedback, and refinement.",
  },
  {
    title: "User-Centered",
    description:
      "Every decision is guided by a deep curiosity about the people I design for and with, focusing on their real needs and behaviors.",
  },
];

const experience = [
  {
    title: "UX/UI Designer",
    company: "Silvertree Brands",
    period: "September 2024 - Present",
    description:
      "Leading UX/UI design across UCOOK, Faithful to Nature, and Pet Heaven e-commerce brands. Responsible for the complete redesign of Faithful to Nature website.",
  },
  {
    title: "UX Designer",
    company: "YumEase",
    period: "July 2023 - August 2024",
    description:
      "Sole UX Designer shaping the user experience from inception to launch. Collaborated with developers, product managers, and QA testers.",
  },
  {
    title: "Visual Team Lead",
    company: "UNi4 Online",
    period: "May 2021 - August 2024",
    description:
      "Led visual design team, streamlined workflows with Kanban, and designed UX for aggregator website consolidating multiple education brands.",
  },
  {
    title: "Design Director",
    company: "Poly Nation",
    period: "June 2018 - April 2020",
    description:
      "Responsible for entire production process, improving production systems, and strategic planning. Contributed to 40% business turnover increase.",
  },
];

const education = [
  {
    title: "Professional Diploma in UX Design",
    institution: "UX Design Institute, Glasgow Caledonian University",
    year: "2022",
  },
  {
    title: "The Creative's Workshop",
    institution: "Akimbo, Seth Godin",
    year: "2021",
  },
  {
    title: "UX Design Fundamentals",
    institution: "California Institute of the Arts",
    year: "2020",
  },
  {
    title: "Visual Elements of User Interface Design",
    institution: "California Institute of the Arts",
    year: "2020",
  },
];

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6 text-balance">
            Relentless Curiosity
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            I am an experienced designer with a diverse background in
            entrepreneurship, business development, branding, product design,
            visual and online education design, and UX/UI.
          </p>
        </header>

        {/* Bio Grid */}
        <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-16 mb-16 md:mb-24">
          {/* Main Bio */}
          <div className="mb-12 lg:mb-0">
            <div className="aspect-square max-w-md bg-card border border-border/50 rounded-sm flex items-center justify-center text-muted-foreground/40 mb-8">
              Erick van Reenen
            </div>

            <div className="prose prose-neutral max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                I have a passion for how exceptional design impacts users&apos;
                lives, blending creativity, empathy, and kindness in everything
                I create. My work is driven by a deep curiosity and an endless
                desire to understand the intricacies of design, focusing on the
                people I design for and with.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                I embrace research as an essential tool for uncovering user
                needs, shaping experiences that resonate with their motivations
                and aspirations. I&apos;m a dedicated problem-solver and advocate
                for quality design, balancing innovation with practical
                solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond design, I&apos;m a proud father who draws inspiration and
                solace from nature, Tai Chi, meditation, breathwork, trail
                running, and early morning swims in the Atlantic Ocean, infusing
                my work with a sense of calm and reflection.
              </p>
            </div>
          </div>

          {/* Sidebar Info */}
          <aside>
            <div className="mb-10">
              <h2 className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-4">Location</h2>
              <p className="text-sm text-foreground">Cape Town, South Africa</p>
            </div>

            <div className="mb-10">
              <h2 className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-4">Contact</h2>
              <p className="text-sm text-foreground">erickvanreenen@gmail.com</p>
              <p className="text-sm text-foreground">+27 620 969 497</p>
            </div>

            <div className="mb-10">
              <h2 className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-4">Availability</h2>
              <p className="text-sm text-foreground">Open to opportunities</p>
            </div>
          </aside>
        </div>

        {/* Skills & Tools */}
        <section className="py-12 md:py-16 border-t border-border/50">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-6">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-sm text-[#FFF2CA] bg-[#3B2E1E] hover:bg-[#C65D3B] hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-6">Tools</h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm px-3 py-1.5 rounded-sm text-[#FFF2CA] bg-[#3B2E1E] hover:bg-[#C65D3B] hover:text-white transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ways of Working */}
        <section className="py-12 md:py-16 border-t border-border/50">
          <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-10">Ways of Working</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {waysOfWorking.map((way) => (
              <div key={way.title} className="p-6 bg-card border border-border/50 rounded-sm hover:border-accent/30 transition-colors duration-200">
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {way.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {way.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="py-12 md:py-16 border-t border-border/50">
          <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-10">Experience</h2>
          <div className="space-y-10">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="grid md:grid-cols-[200px_1fr] gap-4"
              >
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{exp.period}</p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-accent mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="py-12 md:py-16 border-t border-border/50">
          <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-10">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.title}
                className="grid md:grid-cols-[200px_1fr] gap-4"
              >
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{edu.year}</p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 border-t border-border/50">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-normal text-foreground mb-4 text-balance leading-snug">
              Let&apos;s work together
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-accent hover:shadow-md transition-all duration-200 group"
            >
              Get in touch
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
