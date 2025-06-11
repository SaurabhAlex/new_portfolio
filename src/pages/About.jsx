import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const About = () => {
  const experience = [
    {
      company: 'Infinite Group',
      role: 'Flutter Developer',
      period: 'Jun 2024 – Present',
      description: 'Leading Flutter app development with GetX state management, implementing complex animations and REST API integrations.',
    },
    {
      company: 'DSD Systems Pvt. Ltd',
      role: 'Flutter Developer',
      period: 'Oct 2023 – May 2024',
      description: 'Developed and maintained Flutter applications with Firebase integration, FCM notifications, and UI optimizations.',
    },
    {
      company: 'Digicoders Technologies',
      role: 'Flutter Developer',
      period: 'Feb 2023 – Sep 2023',
      description: 'Built e-commerce features using Flutter, implemented Firebase Authentication, and local storage with SQLite.',
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Integral University',
      period: '2025',
    },
    {
      degree: 'Ducat Flutter Certification',
      institution: 'Ducat Training Institute',
      period: '2023',
    },
    {
      degree: 'Google Play Academy: Store Listing Certificate',
      institution: 'Google',
      period: '2024',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About | Saurabh Gupta</title>
        <meta
          name="description"
          content="Learn about Saurabh Gupta's experience as a Flutter Developer, education, and professional journey."
        />
      </Helmet>

      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="max-w-[85ch] text-lg text-muted-foreground">
            With over 2 years of experience in Flutter development, I specialize in building
            scalable and performant cross-platform applications. My expertise includes
            working with Firebase, REST APIs, and various state management solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <div className="mt-8 space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative border-l border-primary/20 pl-6 before:absolute before:-left-[5px] before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary"
              >
                <h3 className="font-semibold">{job.company}</h3>
                <p className="text-sm text-muted-foreground">{job.role} | {job.period}</p>
                <p className="mt-2 text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold">Education & Certifications</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {education.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
              >
                <h3 className="font-semibold">{item.degree}</h3>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.period}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold">Achievements</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Published multiple successful apps on Google Play Store and App Store</li>
                <li>Active contributor on LeetCode: <a href="https://leetcode.com/u/saurabhgupta_/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">@saurabhgupta_</a></li>
                <li>Developed and maintained apps with 10,000+ active users</li>
                <li>Implemented complex animations and UI interactions in Flutter</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About; 