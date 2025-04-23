import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white px-6 py-12 font-sans">
      <section className="max-w-5xl mx-auto grid gap-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-extrabold tracking-tight">Iftach Naftaly</h1>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-lg text-zinc-300">
              I'm a robotics software engineer with an MSc from Technion specializing in guidance, navigation, and control.
              I build autonomous systems using ROS 2, PX4, and cloud DevOps, with a focus on visual SLAM and vision-based navigation.
              My work spans simulation infrastructure, real-time sensor fusion, AI dataset generation with Blender, and drone deployment.
            </p>
          </motion.div>
          <p className="mt-4 text-2xl text-zinc-300">
            MSc Robotics Engineer · PX4 / ROS 2 / Cloud DevOps · Vision-Based Navigation
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href="https://github.com/iftahnaf" target="_blank" rel="noopener noreferrer">
            <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">
              <Github /> GitHub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/iftach-naftaly-159075146/" target="_blank" rel="noopener noreferrer">
            <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">
              <Linkedin /> LinkedIn
            </button>
          </a>
          <a href="mailto:iftahnaf@gmail.com">
            <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">
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
          ].map(({ title, desc }) => (
            <motion.div
              key={title}
              className="bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-zinc-300">{desc}</p>
            </motion.div>
          ))}
        </section>

        <footer className="text-center mt-16 text-zinc-500 text-sm">
          Built with 💻 by Iftach Naftaly · <span className="text-xs">© {new Date().getFullYear()}</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
