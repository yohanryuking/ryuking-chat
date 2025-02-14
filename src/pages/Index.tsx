
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Link, ListTodo, Mic, Users, Zap } from "lucide-react";

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
        <nav className="border-b border-white/10 backdrop-blur-lg sticky top-0">
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

        {/* Hero Section */}
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
              Boost your team's productivity with a revolutionary chat platform that
              seamlessly integrates project management, task tracking, and
              innovative audio-to-text features.
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-ryuking-gray/50 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-ryuking-red/50 transition-colors group"
              >
                <feature.icon className="w-8 h-8 text-ryuking-red mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-ryuking-muted">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* How It Works Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-32 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-16">
              How <span className="text-ryuking-red">It Works</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="relative"
                >
                  <div className="bg-ryuking-gray/30 rounded-lg p-6 backdrop-blur-sm border border-white/10">
                    <div className="text-ryuking-red text-4xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-ryuking-muted">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-32 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-16">
              What Teams Are <span className="text-ryuking-red">Saying</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="bg-ryuking-gray/30 rounded-lg p-8 backdrop-blur-sm border border-white/10"
                >
                  <p className="text-lg mb-6 text-white/90">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-ryuking-red/20 flex items-center justify-center">
                      <span className="text-ryuking-red text-xl font-bold">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-ryuking-muted text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Final CTA Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-32 text-center bg-ryuking-gray/30 rounded-lg p-12 backdrop-blur-sm border border-white/10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Team Communication?
            </h2>
            <p className="text-xl text-ryuking-muted mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using Ryuking Chat to streamline their
              workflow and boost productivity.
            </p>
            <Button
              onClick={() => navigate("/chat")}
              className="bg-ryuking-red hover:bg-ryuking-red/90 text-white px-8 py-6 text-lg"
            >
              Get Started Now
            </Button>
          </motion.section>
        </main>
      </div>
    </div>
  );
};

const features = [
  {
    icon: MessageCircle,
    title: "Team Chat",
    description:
      "Real-time messaging with your team members, enhanced with modern features and a beautiful interface.",
  },
  {
    icon: Link,
    title: "Project Integration",
    description:
      "Seamlessly link conversations to projects and track progress directly within your chats.",
  },
  {
    icon: ListTodo,
    title: "Task Management",
    description:
      "Create, assign, and track tasks without leaving your conversation. Stay productive and organized.",
  },
  {
    icon: Mic,
    title: "Audio Transcription",
    description:
      "Convert audio messages to text automatically, making communication accessible and searchable.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Foster teamwork with dedicated spaces for different projects and teams.",
  },
  {
    icon: Zap,
    title: "Instant Updates",
    description:
      "Stay in sync with real-time notifications and updates on project progress.",
  },
];

const steps = [
  {
    title: "Create Your Space",
    description:
      "Set up your team's workspace in seconds. Invite team members and organize your projects.",
  },
  {
    title: "Connect & Collaborate",
    description:
      "Start conversations, share files, and manage tasks all in one unified platform.",
  },
  {
    title: "Track Progress",
    description:
      "Monitor project advancement, assign tasks, and celebrate team achievements together.",
  },
];

const testimonials = [
  {
    quote: "Ryuking Chat has transformed how our team collaborates. The project integration feature is a game-changer for keeping everything organized.",
    name: "Sarah Chen",
    role: "Project Manager at TechCorp",
  },
  {
    quote: "The audio transcription feature saves us hours of note-taking. It's like having an assistant in every meeting!",
    name: "Michael Rodriguez",
    role: "Team Lead at InnovateCo",
  },
  {
    quote: "Finally, a chat app that understands how modern teams work. The task management integration is exactly what we needed.",
    name: "Emma Thompson",
    role: "Product Owner at DesignHub",
  },
  {
    quote: "The interface is beautiful and intuitive. Our team adopted it immediately, and productivity has never been better.",
    name: "David Park",
    role: "CTO at StartupX",
  },
];

export default Index;
