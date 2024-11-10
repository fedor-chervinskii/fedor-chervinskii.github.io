import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Briefcase, GraduationCap } from "lucide-react";
import { education, workExperience } from '@/constants/config';

const skills = [
  "Computer Vision", "Deep Learning", "SLAM", "ROS", "PyTorch",
  "Python", "C++", "Docker", "Git", "Linux"
];

export default function About() {
  return (
    <div className="space-y-8 max-w-4xl">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <div className="prose dark:prose-invert">
          <p className="text-lg text-muted-foreground">
            I'm a Robotics & Perception Engineer with extensive experience in computer vision, 
            deep learning, and SLAM. I specialize in developing robust perception systems for 
            autonomous robots and creating efficient solutions for complex visual understanding problems.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Code2 className="h-6 w-6" />
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Briefcase className="h-6 w-6" />
          Work Experience
        </h2>
        <div className="grid gap-4">
          {workExperience.map((job, i) => (
            <Card key={i} className="p-6">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-muted-foreground">{job.company} • {job.period}</p>
              <p className="mt-2">{job.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <GraduationCap className="h-6 w-6" />
          Education
        </h2>
        <div className="grid gap-4">
          {education.map((edu, i) => (
            <Card key={i} className="p-6">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.school} • {edu.duration}</p>
              {edu.thesis && <p className="mt-2">Thesis: {edu.thesis}</p>}
              {edu.specialization && <p className="mt-2">{edu.specialization}</p>}
              {edu.track && <p className="mt-2">{edu.track}</p>}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}