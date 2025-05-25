import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { useState } from "react";
import Mermaid from "react-mermaid2";

const projectGifs = [
  "https://github.com/iftahnaf/px4_sitl_on_aws/raw/main/docs/px4_sitl_on_aws.gif",
];

// Add more thought topics by extending this array
const thoughtsTabs = [
  {
    key: "ros2_arch",
    label: "ROS 2 Workspace Architecture",
    content: (
      <div className="text-center text-zinc-400 text-lg py-8">
        <h3 className="text-2xl font-bold mb-4 text-white">
          ROS 2 Workspace Architecture
        </h3>
        <p className="mb-4">
          The repository architecture is structured into three primary levels. This hierarchical approach allows for modularity, reuse, and organized development across different projects.
        </p>
        <ol className="text-left max-w-2xl mx-auto mb-6 list-decimal list-inside">
          <li className="mb-2">
            <span className="font-semibold text-cyan-300">Algorithms:</span> Core algorithm repositories, independent of any framework or middleware, designed for maximum reusability.
          </li>
          <li className="mb-2">
            <span className="font-semibold text-blue-300">ROS-Based Wrappers:</span> ROS package repositories that wrap the algorithms from Level 1, providing ROS integration. Each wrapper imports its algorithm as a submodule for easy updates.
          </li>
          <li className="mb-2">
            <span className="font-semibold text-purple-300">Workspace for Simulation or Deployment:</span> Top-level workspaces for simulation or deployment, assembling wrappers and packages as submodules to build complete systems.
          </li>
        </ol>
        <div className="flex flex-col items-center mb-6">
          <Mermaid
            chart={`
graph TD;
  A1[Algorithm 1] -->|Submodule| W1[Wrapper 1]
  A2[Algorithm 2] -->|Submodule| W2[Wrapper 2]
  A3[Algorithm 3] -->|Submodule| W3[Wrapper 3]
  W1 -->|Submodule| WS[Workspace]
  W2 -->|Submodule| WS
  W3 -->|Submodule| WS

  classDef algorithm stroke:#333,stroke-width:2px;
  classDef wrapper stroke:#333,stroke-width:2px;
  classDef workspace stroke:#333,stroke-width:2px;

  class A1,A2,A3 algorithm;
  class W1,W2,W3 wrapper;
  class WS workspace;
`}
            config={{ theme: "dark" }}
            className="mx-auto w-full max-w-xl rounded-lg border border-zinc-700 shadow mb-4 bg-white"
          />
          <span className="text-zinc-400 text-sm">Repository interaction diagram</span>
        </div>
        <p className="mt-4 text-zinc-400">
          This architecture enables scalable, maintainable, and collaborative development for robotics and simulation projects using ROS 2. Each layer is decoupled, making it easy to update algorithms, wrappers, or workspaces independently.
        </p>
      </div>
    ),
  },
  // Add more topics here as more objects in this array
];

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [thoughtsInnerTab, setThoughtsInnerTab] = useState(thoughtsTabs[0].key);

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white px-6 py-12 font-sans overflow-hidden">
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
        {/* Top Tabs */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold transition border-b-2 ${activeTab === "about"
                ? "border-cyan-400 text-cyan-300"
                : "border-transparent text-zinc-300 hover:text-cyan-200"
              }`}
            onClick={() => handleTabClick("about")}
          >
            About
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold transition border-b-2 ${activeTab === "projects"
                ? "border-blue-400 text-blue-300"
                : "border-transparent text-zinc-300 hover:text-blue-200"
              }`}
            onClick={() => handleTabClick("projects")}
          >
            Projects
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold transition border-b-2 ${activeTab === "thoughts"
                ? "border-purple-400 text-purple-300"
                : "border-transparent text-zinc-300 hover:text-purple-200"
              }`}
            onClick={() => handleTabClick("thoughts")}
          >
            Thoughts
          </button>
        </div>

        {/* About Tab */}
        {activeTab === "about" && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center justify-center gap-2 mb-2">
              <img
                src="/iftach.png"
                alt="Iftach Naftaly"
                className="w-24 h-24 rounded-full border-2 border-cyan-400 shadow-md object-cover"
                style={{ objectPosition: "center top" }}
              />
              <h1 className="text-7xl font-extrabold tracking-tight mb-2 font-mono bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
                Iftach Naftaly
              </h1>
              {/* Commit history header and image */}
              <div className="w-full max-w-xl flex flex-col items-center">
                <h2 className="text-lg font-semibold text-zinc-300 mb-1">
                  GitHub Commit History
                </h2>
                <a
                  href="https://github.com/iftahnaf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://ghchart.rshah.org/iftahnaf"
                    alt="GitHub contribution chart"
                    className="mx-auto w-full rounded-lg border border-zinc-700 shadow"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-xl text-zinc-200 drop-shadow">
                I'm a robotics software engineer with an MSc from Technion, specializing in guidance, navigation, and control.
                I develop autonomous systems leveraging <span className="text-cyan-300 font-semibold">ROS 2</span>, <span className="text-blue-300 font-semibold">PX4</span>, and <span className="text-purple-300 font-semibold"> DevOps</span>.
                My expertise centers on DevOps for robotics, advanced simulation infrastructure, real-time sensor fusion, and scalable cloud solutions for drones and autonomous systems.
              </p>
            </motion.div>
            <motion.p
              className="mt-4 text-2xl text-zinc-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              PX4 · ROS 2 · DevOps · Simulations · SLAM · Computer Vision
            </motion.p>
            <div className="flex justify-center flex-wrap gap-4 mt-8">
              <a
                href="https://github.com/iftahnaf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-cyan-400 hover:text-black transition font-semibold shadow-lg hover:scale-105">
                  <Github /> GitHub
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/iftach-naftaly-159075146/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-400 hover:text-black transition font-semibold shadow-lg hover:scale-105">
                  <Linkedin /> LinkedIn
                </button>
              </a>
              <a href="mailto:iftahnaf@gmail.com">
                <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-purple-400 hover:text-black transition font-semibold shadow-lg hover:scale-105">
                  <Mail /> Email
                </button>
              </a>
            </div>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <section className="grid gap-6">
            <h2 className="text-4xl font-semibold text-center">Projects</h2>
            {[
              {
                title: "PX4 SITL Simulations on AWS",
                desc: "This project demonstrates an automated workflow for running PX4 SITL (Software-In-The-Loop) simulations with ROS 2 on AWS infrastructure — fully managed by GitHub Actions.",
                repo: "https://github.com/iftahnaf/px4_sitl_on_aws",
              },
            ].map(({ title, desc, repo }, i) => (
              <motion.div
                key={title}
                className="bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col md:flex-row items-center gap-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">
                    <a
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:underline"
                    >
                      {title}
                    </a>
                  </h3>
                  <p className="mt-2 text-zinc-300">{desc}</p>
                  <img
                    src={projectGifs[i]}
                    alt={title + " gif"}
                    className="w-40 h-40 object-cover rounded-lg border-2 border-zinc-700 shadow-md mt-4"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </section>
        )}

        {/* Thoughts Tab with inner tabs */}
        {activeTab === "thoughts" && (
          <section className="grid gap-6">
            {/* Inner tab header */}
            <div className="flex justify-center gap-4 mb-6">
              {thoughtsTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setThoughtsInnerTab(tab.key)}
                  className={`px-4 py-2 rounded-t-lg font-semibold transition border-b-2 ${thoughtsInnerTab === tab.key
                      ? "border-purple-400 text-purple-300"
                      : "border-transparent text-zinc-300 hover:text-purple-200"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/* Inner tab content */}
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                {thoughtsTabs.find((tab) => tab.key === thoughtsInnerTab)?.content}
              </div>
            </div>
          </section>
        )}

        <footer className="text-center mt-16 text-zinc-500 text-sm">
          Built with <span className="animate-bounce inline-block">💻</span> by Iftach Naftaly · <span className="text-xs">© {new Date().getFullYear()}</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
