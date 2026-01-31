import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <article className="overflow-hidden">
        <div className={`relative bg-card border border-border/50 rounded-sm overflow-hidden ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'} transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-lg`}>
          <div className="absolute inset-0 bg-muted/50" />
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 text-sm font-medium">
            {project.title}
          </div>
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />
        </div>
        
        <div className="pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                {project.subtitle}
              </p>
            </div>
            <ArrowUpRight 
              size={20} 
              className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 mt-1" 
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-[#3B2E1E] text-[#FFF2CA] rounded-sm transition-colors duration-200 hover:bg-[#C65D3B] hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {featured && project.outcomes[0] && (
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              {project.outcomes[0]}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
