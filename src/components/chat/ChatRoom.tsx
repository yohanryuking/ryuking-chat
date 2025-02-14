
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { FileAudio, Image, Send } from "lucide-react"
import { useRef, useState } from "react"

interface Message {
  id: string
  content: string
  sender: string
  timestamp: Date
  type: "text" | "image" | "audio-transcript"
}

interface ChatRoomProps {
  name: string
  description: string
  messages: Message[]
  onSendMessage: (content: string) => void
  onUploadImage: (file: File) => void
  onUploadAudio: (file: File) => void
}

export function ChatRoom({
  name,
  description,
  messages,
  onSendMessage,
  onUploadImage,
  onUploadAudio,
}: ChatRoomProps) {
  const [message, setMessage] = useState("")
  const imageInputRef = useRef<HTMLInputElement>(null)
  const audioInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message)
      setMessage("")
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onUploadImage(file)
    }
  }

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onUploadAudio(file)
    }
  }

  return (
    <Card className="w-full h-[calc(100vh-2rem)] bg-ryuking-gray/50 border-white/10 backdrop-blur-lg">
      <div className="flex flex-col h-full">
        {/* Chat Header */}
        <div className="p-4 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white">{name}</h2>
          <p className="text-ryuking-muted text-sm">{description}</p>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <AnimatePresence initial={false}>
            {messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={cn(
                  "mb-4",
                  msg.sender === "currentUser" ? "ml-auto" : "mr-auto"
                )}
              >
                <div
                  className={cn(
                    "max-w-md p-4 rounded-lg",
                    msg.sender === "currentUser"
                      ? "bg-ryuking-red/20 ml-auto"
                      : "bg-ryuking-gray ml-0"
                  )}
                >
                  <p className="text-white">{msg.content}</p>
                  <span className="text-xs text-ryuking-muted mt-2 block">
                    {msg.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t border-white/10">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-ryuking-dark/50 border-white/10 focus:border-ryuking-red/50"
            />
            <input
              type="file"
              ref={imageInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <input
              type="file"
              ref={audioInputRef}
              accept="audio/*"
              className="hidden"
              onChange={handleAudioUpload}
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => imageInputRef.current?.click()}
              className="border-white/10 hover:bg-white/5"
            >
              <Image className="w-4 h-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => audioInputRef.current?.click()}
              className="border-white/10 hover:bg-white/5"
            >
              <FileAudio className="w-4 h-4" />
            </Button>
            <Button type="submit" className="bg-ryuking-red hover:bg-ryuking-red/90">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </Card>
  )
}
