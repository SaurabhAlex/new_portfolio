import { Link, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-8 flex items-center space-x-2">
          <span className="text-xl font-bold">Saurabh Gupta</span>
        </Link>

        <div className="flex flex-1 items-center justify-between">
          <ul className="flex gap-6">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </button>
            <a
              href="https://docs.google.com/document/d/1GjEqK7IB9PNrXxzt2NvQz7wBsAbIGuqH6WBtD8FmTTQ/edit?usp=sharing"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 