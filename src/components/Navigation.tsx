import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "work", href: "#work" },
  { name: "about", href: "#about" },
  { name: "contact", href: "#contact" },
];

interface Props {
  title?: string;
}

const AnimatedNav = ({ title = "arjun bhogal" }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8 backdrop-blur-sm">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - Title */}
          <motion.a
            href="/"
            className="text-zinc-900 px-3 py-2 text-lg font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.a>

          {/* Right side - Desktop Navigation */}
          <motion.div
            className="hidden sm:flex sm:items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-zinc-900 px-3 py-2 text-lg font-medium rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition duration-300 ease-in-out"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Mobile Menu Button with Smooth Transition */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-900 hover:text-zinc-950 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close-icon"
                    initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu-icon"
                    initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="sm:hidden px-2 pt-2 pb-3 space-y-1 backdrop-blur-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-900 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default AnimatedNav;
