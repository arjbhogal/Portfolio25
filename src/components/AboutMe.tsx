import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="w-full py-20 bg-white">
      <div className="mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <motion.div
          className="space-y-6 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-zinc-900 leading-tight">
            About Me
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            I'm a passionate **UI/UX Developer** focused on creating seamless, 
            user-friendly digital experiences. With a strong foundation in **design and 
            front-end development**, I build intuitive interfaces that bridge aesthetics 
            and functionality.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed">
            I thrive in environments where **innovation and creativity** come together to 
            solve real-world problems. Let's build something great together!
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src="/profile.jpg"
            alt="Profile Image"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;
