import { motion } from "framer-motion";
import "../styles/global.css";

interface Props {
  header?: string;
  header2?: string;
  description?: string;
}

const AnimatedHeader = ({
  header = "Hi, I’m Arjun Bhogal",
  header2 = "A UI/UX Developer",
  description = "Coming soon...",
}: Props) => {
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8 w-full">
        <div className="text-left space-y-3 px-3">
          {/* Animated Header 1 */}
          <motion.h1
            className="text-7xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl font-semibold leading-tight text-zinc-900 opacity-0"
            initial={{ opacity: 0, y: 50, color: "#fff" }}
            animate={{ opacity: 1, y: 0, color: "#18181b" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {header}
            <br />
            {header2}
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            className="text-xl sm:text-2xl font-semibold text-zinc-900 opacity-0"
            initial={{ opacity: 0, y: 20, color: "#fff" }}
            animate={{ opacity: 1, y: 0, color: "#18181b" }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHeader;
