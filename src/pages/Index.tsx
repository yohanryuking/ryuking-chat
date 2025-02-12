
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-ryuking-dark">
        <div className="absolute inset-0 bg-gradient-to-tr from-ryuking-dark via-ryuking-gray/20 to-ryuking-red/10" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <nav className="border-b border-white/10 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold text-white">Ryuking Chat</div>
              <Button
                onClick={() => navigate("/chat")}
                className="bg-ryuking-red hover:bg-ryuking-red/90 text-white"
              >
                Launch App
              </Button>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-6xl font-bold text-white"
            >
              Team Collaboration{" "}
              <span className="text-ryuking-red">Reimagined</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-ryuking-muted max-w-2xl mx-auto"
            >
              Experience seamless communication and project management in one
              elegant platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => navigate("/chat")}
                className="bg-ryuking-red hover:bg-ryuking-red/90 text-white px-8 py-6 text-lg"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Features Section */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 3) }}
                className="bg-ryuking-gray/50 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-ryuking-red/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-ryuking-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Team Chat",
    description:
      "Real-time messaging with your team members, enhanced with modern features and a beautiful interface.",
  },
  {
    title: "Project Integration",
    description:
      "Seamlessly link conversations to projects and track progress directly within your chats.",
  },
  {
    title: "Task Management",
    description:
      "Create, assign, and track tasks without leaving your conversation. Stay productive and organized.",
  },
];

export default Index;
