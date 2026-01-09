import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
  {
    title: "I Unite - Abroad Study B2B CRM App",
    description: "A role-based CRM mobile application built for study-abroad consultants and counselors to manage leads, track students, and handle real-time communication efficiently.",
    image: "./projects/iunite_new.png",
    technologies: [
      "Flutter",
      "Firebase",
      "REST APIs"
    ],
    category: "mobile",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.infinitegroup.iunite",
      github: "https://github.com/saurabhgupta/iunite-app"
    },
    company: "Infinite Group",
    features: [
      "Role-based authentication system",
      "Lead tracking and management",
      "Real-time data synchronization",
      "Push notifications",
      "Secure Firebase authentication",
      "Production deployment and release management",
      "Post-release production support"
    ]
  },
  {
    title: "EduVizz - School Management App",
    description: "A school management and communication platform providing real-time academic updates with role-based access for teachers, students, and administrators.",
    image: "./projects/eduvizz_new.png",
    technologies: [
      "Flutter",
      "Firebase"
    ],
    category: "mobile",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.dsdsystems.eduvizz1",
      github: "https://github.com/saurabhgupta/eduvizz-app"
    },
    company: "DSD Systems Pvt. Ltd",
    features: [
      "Role-based user access",
      "Attendance and academic tracking",
      "Real-time updates",
      "Secure authentication",
      "Optimized UI for performance",
      "School communication system"
    ]
  },
  {
    title: "Tech Junction - E-commerce App",
    description: "An e-commerce mobile application for purchasing mobiles, laptops, and accessories with smooth cart and order flow functionality.",
    image: "./projects/techjunction_new.png",
    technologies: [
      "Flutter",
      "Firebase",
      "REST APIs"
    ],
    category: "mobile",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.tech_junction",
      github: "https://github.com/saurabhgupta/techjunction-app"
    },
    company: "DSD Systems Pvt. Ltd",
    features: [
      "Product listing and categorization",
      "Cart and order management",
      "Firebase authentication",
      "REST API integration",
      "Optimized checkout flow",
      "Performance optimized UI"
    ]
  },
  {
    title: "Infinite Group - Company Website",
    description: "Official company website maintenance and legal content management system developed using React.js and Firebase hosting.",
    image: "./projects/infinitegroup_web.png",
    technologies: [
      "React.js",
      "Firebase"
    ],
    category: "web",
    links: {
      playStore: "",
      github: "https://github.com/saurabhgupta/infinitegroup-website"
    },
    company: "Infinite Group",
    features: [
      "Terms & Conditions page implementation",
      "Privacy Policy page integration",
      "UI text and content updates",
      "Firebase hosting deployment",
      "Production maintenance and updates"
    ]
  }
];


  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <>
      <Helmet>
        <title>Projects | Saurabh Gupta</title>
        <meta
          name="description"
          content="Explore Saurabh Gupta's Flutter projects, including mobile apps and web applications."
        />
      </Helmet>

      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="max-w-[85ch] text-lg text-muted-foreground">
            A collection of my recent work in mobile and web development using Flutter
            and modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <div className="flex gap-4">
            {['all', 'mobile', 'web'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.company && (
                  <p className="mt-1 text-sm text-primary">
                    {project.company}
                  </p>
                )}
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
                {project.features && (
                  <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Play Store
                    </a>
                  )}
                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      App Store
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Projects; 
