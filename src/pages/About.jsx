import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const About = () => {
 const experience = [
  {
    company: 'Infinite Group',
    role: 'Flutter Developer',
    period: 'Jun 2024 – Present',
    description:
      'Leading end-to-end Flutter app development with Bloc-based state management, building scalable architectures, integrating REST APIs, and implementing complex UI animations. Actively involved in performance optimization, code refactoring, and delivering production-ready features for both Android and iOS platforms.',
  },
  {
    company: 'DSD Systems Pvt. Ltd',
    role: 'Flutter Developer',
    period: 'Oct 2023 – May 2024',
    description:
      'Developed and maintained multiple Flutter applications with Firebase services including Authentication, Firestore, and FCM push notifications. Focused on UI/UX improvements, API integration, bug fixing, and performance enhancements while ensuring smooth releases on Play Store and App Store.',
  },
  {
    company: 'Digicoders Technologies',
    role: 'Flutter Developer',
    period: 'Feb 2023 – Sep 2023',
    description:
      'Worked on Flutter-based e-commerce applications, implementing core features such as product listings, cart flows, and checkout logic. Integrated Firebase Authentication, managed local data using SQLite, and collaborated with designers and backend teams to deliver stable and responsive mobile experiences.',
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
           Flutter developer with 2+ years of hands-on experience building and scaling
  production-ready Android and iOS applications. I focus on clean architecture,
  efficient state management (Bloc, GetX), and performance optimization while
  delivering polished UI/UX with smooth animations. Experienced in integrating
  REST APIs, Firebase services, and shipping apps end-to-end from development
  to Play Store and App Store release.
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
                <li>Published and maintained multiple production-grade applications on Google Play Store and App Store</li>
                <li>Built and scaled Flutter apps with 10,000+ active users, focusing on performance, stability, and user experience</li>
                <li>Implemented advanced animations and complex UI interactions to deliver smooth, engaging mobile experiences</li>
                <li>Actively solve data structures and algorithms problems on LeetCod: <a href="https://leetcode.com/u/saurabhgupta_/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">@saurabhgupta_</a></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About; 
