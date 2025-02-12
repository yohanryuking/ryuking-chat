
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  setTimeout(() => setIsLoading(false), 1500);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-glow">
          <div className="w-16 h-16 border-4 border-ryuking-red rounded-full border-t-transparent animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:text-ryuking-red transition-colors"
        >
          ← Back to Home
        </Button>
        <div className="bg-ryuking-gray rounded-lg p-6 backdrop-blur-lg border border-white/10">
          <h1 className="text-2xl font-bold mb-4">Chat Interface Coming Soon</h1>
          <p className="text-ryuking-muted">
            The chat functionality is under development. Check back soon for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
