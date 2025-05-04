import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const projectGifs = [
  // Free, relevant GIFs from Giphy CDN or similar
  "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif", // Cloud Sim
  "https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif", // SLAM
  "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif", // Blender/AI
];

function App() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white px-6 py-12 font-sans overflow-hidden">
      {/* Animated Particles Background */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "#18181b" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#fff" },
            links: { enable: true, color: "#fff", distance: 150 },
            move: { enable: true, speed: 1 },
            number: { value: 40 },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: 2 },
          },
        }}
        className="absolute inset-0 z-0"
      />
      <section className="relative z-10 max-w-5xl mx-auto grid gap-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-7xl font-extrabold tracking-tight mb-2 font-mono bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            Iftach Naftaly
          </h1>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-xl text-zinc-200 drop-shadow">
              I'm a robotics software engineer with an MSc from Technion specializing in guidance, navigation, and control.<br />
              I build autonomous systems using <span className="text-cyan-300 font-semibold">ROS 2</span>, <span className="text-blue-300 font-semibold">PX4</span>, and <span className="text-purple-300 font-semibold">cloud DevOps</span>, with a focus on visual SLAM and vision-based navigation.<br />
              My work spans simulation infrastructure, real-time sensor fusion, AI dataset generation with Blender, and drone deployment.
            </p>
          </motion.div>
          <motion.p
            className="mt-4 text-2xl text-zinc-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            MSc Robotics Engineer · PX4 / ROS 2 / Cloud DevOps · Vision-Based Navigation
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a href="https://github.com/iftahnaf" target="_blank" rel="noopener noreferrer">
            <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-cyan-400 hover:text-black transition font-semibold shadow-lg hover:scale-105">
              <Github /> GitHub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/iftach-naftaly-159075146/" target="_blank" rel="noopener noreferrer">
            <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-400 hover:text-black transition font-semibold shadow-lg hover:scale-105">
              <Linkedin /> LinkedIn
            </button>
          </a>
          <a href="mailto:iftahnaf@gmail.com">
            <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-purple-400 hover:text-black transition font-semibold shadow-lg hover:scale-105">
              <Mail /> Email
            </button>
          </a>
        </motion.div>

        <section className="mt-12 grid gap-6">
          <h2 className="text-4xl font-semibold text-center">Projects</h2>

          {[
            {
              title: "PX4 Cloud Simulations on AWS",
              desc: "CI/CD pipeline to run PX4 SITL simulations on EC2, upload results to S3, and trigger automated bag analysis using ECS Fargate.",
            },
            {
              title: "Visual SLAM Integration in Sim & Real",
              desc: "Open-source SLAM algorithm integration for UAVs in Gazebo and physical test environments with ROS 2 and PX4 offboard control.",
            },
            {
              title: "AI Dataset Generation with Blender",
              desc: "Synthetic data generation using Blender pipelines to train vision models for aerial robotics perception and decision-making.",
            },
          ].map(({ title, desc }, i) => (
            <motion.div
              key={title}
              className="bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col md:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={projectGifs[i]}
                alt={title + " gif"}
                className="w-40 h-40 object-cover rounded-lg border-2 border-zinc-700 shadow-md mb-4 md:mb-0"
                loading="lazy"
              />
              <div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 text-zinc-300">{desc}</p>
              </div>
            </motion.div>
          ))}
        </section>

        <footer className="text-center mt-16 text-zinc-500 text-sm">
          Built with <span className="animate-bounce inline-block">💻</span> by Iftach Naftaly · <span className="text-xs">© {new Date().getFullYear()}</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
