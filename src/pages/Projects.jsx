import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      "title": "Tech Junction - E-commerce App",
      "description": "Tech Junction is an e-commerce application designed to provide a seamless shopping experience for cutting-edge electronics. It offers an extensive selection of mobiles, laptops, and accessories, prioritizing user comfort, satisfaction, and secure transactions.",
      "image": "/projects/techjunction_new.png",
      "technologies": [
        "Flutter",
        "Firebase",
        "REST APIs",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],
      "category": "mobile",
      "links": {
        "playStore": "https://play.google.com/store/apps/details?id=com.techjunction.app",
        "github": "https://github.com/saurabhgupta/techjunction-app"
      },
      "company": "DSD Systems Pvt. Ltd",
      "features": [
        "Intuitive registration and login process",
        "Secure authentication for user data protection",
        "Extensive selection of mobiles, laptops, and accessories",
        "Convenient product categorization for easy navigation",
        "Personalized 'Favorites' wishlist feature",
        "Diverse payment options (Cash on Delivery, Credit/Debit Card, UPI)",
        "Seamless online payment redirection to UPI apps",
        "Hassle-free ordering with a few taps",
        "Reliable customer support via email (saurabhalex04@gmail.com)"
      ]
    },
    {
      title: 'EduVizz - An Education App',
      description: 'A comprehensive school management platform that streamlines communication between directors, teachers, and students. Features include attendance tracking, assignment management, library resources, event galleries, and circular notices.',
      image: '/projects/eduvizz.png',
      technologies: ['Flutter', 'Firebase', 'REST APIs', 'GetX'],
      category: 'mobile',
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.dsdsystems.eduvizz1&hl=en',
        github: 'https://github.com/saurabhgupta/eduvizz-app',
      },
      company: 'DSD Systems Pvt. Ltd',
      features: [
        'Dashboard with academic insights',
        'Attendance management system',
        'Assignment distribution',
        'Library management',
        'Event galleries',
        'Circular notices',
        'Teacher-student communication'
      ]
    },
    {
      "title": "Empower Edu - Study Abroad App",
      "description": "Empower Edu is a user-centric mobile application built to simplify the study abroad journey for students, institutions, and consultants. It offers personalized course recommendations, application tracking, document management, and expert guidance — all in one platform.",
      "image": "/projects/empower_edu.png",
      "technologies": [
        "Flutter",
        "Firebase",
        "REST APIs",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],
      "category": "mobile",
      "links": {
        "playStore": "https://play.google.com/store/apps/details?id=com.empoweredu.app",
        "github": "https://github.com/saurabhgupta/empoweredu-app"
      },
      "company": "Infinite Group",
      "features": [
        "Smooth onboarding and profile setup for students and counselors",
        "Advanced course and university search with filters by country, stream, and level",
        "Real-time application tracking and status updates",
        "Secure document upload, storage, and sharing",
        "One-click access to expert study abroad counselors",
        "Push notifications for application progress, deadlines, and offers",
        "Bookmark universities or courses of interest",
        "AI-based course suggestions based on user profile and preferences",
        "Live support chat integrated for immediate assistance"
      ]
    },
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