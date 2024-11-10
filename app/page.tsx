import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download } from "lucide-react";
import { IMAGES } from '@/constants/images';
import { siteConfig } from '@/constants/config';
import { projects } from '@/constants/projects';
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">Hi, I'm {siteConfig.shortName}</h1>
          <p className="text-xl text-muted-foreground">
            A Robotics & Perception Engineer specializing in computer vision, deep learning, and SLAM for autonomous robots
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href={siteConfig.resumePath} download>
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative h-64 w-64 rounded-full overflow-hidden">
          <Image
            src={IMAGES.profile.avatar}
            alt="Profile Avatar"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project, i) => (
            <Card key={i} className="p-6 space-y-4">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground">
                {project.description}
              </p>
              <Button variant="secondary" size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}