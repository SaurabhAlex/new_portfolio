import { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground"
    >
      <div className="aspect-video overflow-hidden bg-muted">
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={handleImageError}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted p-4 text-muted-foreground">
            <p className="text-center">{project.title}</p>
          </div>
        )}
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
  );
};

export default ProjectCard; 