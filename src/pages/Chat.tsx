
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ChatInitiator } from "@/components/chat/ChatInitiator"
import { ChatCreationForm, ChatCreationData } from "@/components/chat/ChatCreationForm"
import { ChatRoom } from "@/components/chat/ChatRoom"
import { useToast } from "@/components/ui/use-toast"
import { AnimatePresence } from "framer-motion"

interface Message {
  id: string
  content: string
  sender: string
  timestamp: Date
  type: "text" | "image" | "audio-transcript"
}

const Chat = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [showCreationForm, setShowCreationForm] = useState(false)
  const [currentChat, setCurrentChat] = useState<ChatCreationData | null>(null)
  const [messages, setMessages] = useState<Message[]>([])

  const handleInitiateChat = () => {
    setShowCreationForm(true)
  }

  const handleCreateChat = (data: ChatCreationData) => {
    // TODO: Integrate with backend to create chat room
    setCurrentChat(data)
    setShowCreationForm(false)
    toast({
      title: "Chat Created",
      description: `Chat room "${data.name}" has been created successfully.`,
    })
  }

  const handleSendMessage = (content: string) => {
    // TODO: Integrate with backend to send message
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "currentUser",
      timestamp: new Date(),
      type: "text",
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleUploadImage = async (file: File) => {
    // TODO: Integrate with backend to upload and process image
    toast({
      title: "Image Upload",
      description: "Image upload functionality will be implemented with backend integration.",
    })
  }

  const handleUploadAudio = async (file: File) => {
    // TODO: Integrate with backend for audio-to-text transcription
    toast({
      title: "Audio Upload",
      description: "Audio transcription will be implemented with backend integration.",
    })
  }

  return (
    <div className="min-h-screen p-4 bg-ryuking-dark">
      <div className="max-w-7xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:text-ryuking-red transition-colors"
        >
          ← Back to Home
        </Button>

        {!currentChat && !showCreationForm && (
          <ChatInitiator onInitiate={handleInitiateChat} />
        )}

        <AnimatePresence>
          {showCreationForm && (
            <ChatCreationForm
              onClose={() => setShowCreationForm(false)}
              onSubmit={handleCreateChat}
            />
          )}
        </AnimatePresence>

        {currentChat && (
          <ChatRoom
            name={currentChat.name}
            description={currentChat.description}
            messages={messages}
            onSendMessage={handleSendMessage}
            onUploadImage={handleUploadImage}
            onUploadAudio={handleUploadAudio}
          />
        )}
      </div>
    </div>
  )
}

export default Chat
