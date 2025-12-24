import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, ExternalLink, Download, Mail, User } from "lucide-react"

export default function Portfolio() {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Django", icon: "🎸" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "📜" },
    { name: "AWS", icon: "☁️" },
    { name: "Vercel", icon: "▲" },
    { name: "Git", icon: "📦" },
  ]

  const experience = [
    {
      role: "Frontend Intern",
      company: "Skillwell Remote Educations",
      period: "Sep 2025 - Nov 2025",
      achievements: ["Improved UI latency by 25%", "Increased engagement by 30%"],
    },
    {
      role: "Full Stack Intern",
      company: "Codtech IT Solutions",
      period: "Jun 2025 - Aug 2025",
      achievements: ["Built backend features with Django + PostgreSQL"],
    },
  ]

  const projects = [
    {
      title: "SparkBill",
      description: "A production-ready billing app with Razorpay integration, PDF generation, and WhatsApp sharing.",
      tech: ["React", "Django", "PostgreSQL"],
      type: "SaaS Billing System",
      link: "#", // Add your actual project link here
    },
    {
      title: "Course Selling Website",
      description:
        "A dynamic education platform with instructor dashboards, secure login, and real-time progress tracking.",
      tech: ["React", "Django", "PostgreSQL"],
      type: "Education Platform",
      link: "#", // Add your actual project link here
    },
  ]

  return (
    <div className="min-h-screen bg-background selection:bg-accent-glow/30 selection:text-foreground">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold tracking-tight hover:text-accent-glow transition-colors">
            Naveen<span className="text-accent-glow">.</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="#tech" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Tech</Link>
            <Link href="#experience" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Experience</Link>
            <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
          </div>
          <Button variant="outline" size="sm" asChild className="hidden sm:flex">
             <Link href="mailto:contact@example.com">Contact Me</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-32 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-8">
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="inline-flex items-center rounded-full border border-accent-glow/30 bg-accent-glow/10 px-3 py-1 text-sm font-medium text-accent-glow">
                <span className="flex h-2 w-2 rounded-full bg-accent-glow mr-2 animate-pulse"></span>
                Available for work
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
                Building Production-Grade <span className="text-accent-glow">SaaS Platforms</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl text-pretty md:text-2xl">
                Full Stack Developer specializing in React, Django, and AWS. Creator of SparkBill.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <Button size="lg" className="text-base cursor-pointer" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent cursor-pointer" asChild>
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-cyber-glow opacity-20 blur-3xl" />
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="px-6 py-20 lg:px-8 scroll-mt-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-balance flex items-center gap-3">
             Tech Stack
             <div className="h-px flex-1 bg-border" />
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {techStack.map((tech, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm transition-all hover:border-accent-glow/50 hover:shadow-glow hover:-translate-y-1"
              >
                <div className="flex flex-col items-center justify-center p-6 space-y-3">
                  <span className="text-4xl transition-transform group-hover:scale-110">{tech.icon}</span>
                  <span className="text-sm font-medium text-foreground">{tech.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 py-20 lg:px-8 scroll-mt-16 bg-secondary/20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-balance flex items-center gap-3">
             Experience
             <div className="h-px flex-1 bg-border" />
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 hover:border-accent-glow/50 transition-colors">
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full border-2 border-accent-glow bg-background shadow-[0_0_10px_rgba(var(--accent-glow),0.5)]" />

                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-accent-glow font-medium text-lg">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1 font-mono">{exp.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground flex items-start">
                        <span className="mr-2 text-accent-glow mt-1.5 h-1.5 w-1.5 rounded-full bg-current" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="px-6 py-20 lg:px-8 scroll-mt-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-balance flex items-center gap-3">
            Featured Projects
            <div className="h-px flex-1 bg-border" />
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <Link href={project.link} key={index} className="block group">
                <Card
                  className="h-full relative overflow-hidden border-border bg-card/50 backdrop-blur-sm transition-all hover:border-accent-glow/50 hover:shadow-glow hover:-translate-y-1"
                >
                  <div className="p-6 space-y-4 flex flex-col h-full">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-mono">{project.type}</p>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-accent-glow transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <div className="rounded-full p-2 bg-secondary group-hover:bg-accent-glow/20 transition-colors">
                            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent-glow transition-colors" />
                        </div>
                      </div>
                      <p className="text-muted-foreground text-pretty">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-border/50">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-md border border-border bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 lg:px-8 bg-card/30">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Naveen V.</h3>
              <p className="text-sm text-muted-foreground">Full Stack Web Developer</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                 <Mail className="h-4 w-4" />
                 <a href="mailto:contact@example.com" className="hover:text-accent-glow transition-colors">contact@example.com</a>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Naveenv26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 backdrop-blur-sm transition-all hover:border-accent-glow/50 hover:bg-card hover:text-accent-glow hover:shadow-glow"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/naveen-v-7b1458295"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 backdrop-blur-sm transition-all hover:border-accent-glow/50 hover:bg-card hover:text-accent-glow hover:shadow-glow"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">© {newqpDate().getFullYear()} Naveen V. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}