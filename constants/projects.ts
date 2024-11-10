import { IMAGES } from './images';

export const projects = [
    {
      title: "Auto-Assembly Framework",
      description: "A framework for automated robotic assembly directly from CAD models, including optimal assembly sequence computation and trajectory planning. Published at ICRA 2023.",
      image: IMAGES.projects.project1,
      tech: ["ROS", "Python", "C++", "Computer Vision", "Optimization"],
      liveUrl: "https://ieeexplore.ieee.org/abstract/document/10161376",
      linkText: "Paper"
    },
    {
      title: "Sim2Real Peg-Hole Insertion",
      description: "Implementation of robotic peg-hole insertion using eye-in-hand camera and sim2real transfer learning. Published at ICRA 2020 ViTac workshop.",
      image: IMAGES.projects.project2,
      tech: ["PyTorch", "ROS", "Computer Vision", "Robotics"],
      liveUrl: "https://arxiv.org/abs/2005.14401",
      linkText: "arXiv"
    },
    {
      title: "AI Copilot for Requirements",
      description: "Proof-of-Concept for AI-powered requirements management in industrial automation using LLMs and RAG pipeline.",
      image: IMAGES.projects.project3,
      tech: ["Python", "LangChain", "LLMs", "TypeScript", "React"],
      liveUrl: "http://bowatt.com",
      linkText: "Project Website"
    }
]; 