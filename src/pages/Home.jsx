import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Saurabh Gupta | Flutter Developer</title>
        <meta
          name="description"
          content="Portfolio of Flutter Developer Saurabh Gupta specializing in cross-platform apps, Firebase, and animations."
        />
        <meta property="og:title" content="Saurabh Gupta | Flutter Developer" />
        <meta
          property="og:description"
          content="Portfolio of Flutter Developer Saurabh Gupta specializing in cross-platform apps, Firebase, and animations."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background -z-10" />

        <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-primary">Flutter Developer</span>
              <br />
              Cross-Platform Mobile App Specialist
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          >
            Building scalable, high-quality apps with Flutter, Firebase, and REST APIs. 
            Transforming ideas into beautiful, performant mobile experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              View Projects
            </Link>
            <a
              href="https://docs.google.com/document/d/1d1cv3GEhnlcl5HxXkUdSW0jydiJ8P5fHZPUGbw6T8Q0/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              View Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {[
              'Flutter',
              'Dart',
              'Firebase',
              'REST APIs',
              'GetX',
              'Bloc',
              'Provider',
              'Node.js',
              'MongoDB',
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home; 
