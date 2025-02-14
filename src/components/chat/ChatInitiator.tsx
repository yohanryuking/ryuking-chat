
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"
import { motion } from "framer-motion"

interface ChatInitiatorProps {
  onInitiate: () => void
}

export function ChatInitiator({ onInitiate }: ChatInitiatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full max-w-md mx-auto bg-ryuking-gray/50 border-white/10 backdrop-blur-lg hover:border-ryuking-red/50 transition-all cursor-pointer group"
        onClick={onInitiate}
      >
        <div className="p-8 flex flex-col items-center justify-center space-y-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-full bg-ryuking-red/10 p-4"
          >
            <PlusCircle className="w-12 h-12 text-ryuking-red" />
          </motion.div>
          <h2 className="text-xl font-semibold text-white">Start a New Chat</h2>
          <p className="text-ryuking-muted text-center">
            Create a chat room, invite team members, and start collaborating
          </p>
          <Button className="bg-ryuking-red hover:bg-ryuking-red/90">
            Create Chat
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
