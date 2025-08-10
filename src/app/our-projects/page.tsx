"use client";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsIntro from "@/components/projects/ProjectsIntro";
import ProjectsList from "@/components/projects/ProjectsList";
import ProjectsCallToAction from "@/components/projects/ProjectsCallToAction";
import ProjectsPromise from "@/components/projects/ProjectsPromise";
import ProjectsTrust from "@/components/projects/ProjectsTrust";

export default function OurProjects() {
  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectsIntro />
      <ProjectsList />
      <ProjectsCallToAction />
      <ProjectsPromise />
      <ProjectsTrust />
    </div>
  );
}
