
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"

interface ChatCreationFormProps {
  onClose: () => void
  onSubmit: (data: ChatCreationData) => void
}

export interface ChatCreationData {
  name: string
  description: string
  projectId?: string
  members: string[]
}

export function ChatCreationForm({ onClose, onSubmit }: ChatCreationFormProps) {
  const [formData, setFormData] = useState<ChatCreationData>({
    name: "",
    description: "",
    members: [],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <Card className="w-full max-w-lg bg-ryuking-gray/90 border-white/10">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-white">Create New Chat</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-ryuking-muted hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Chat Name</Label>
              <Input
                id="name"
                placeholder="Enter chat name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-ryuking-dark/50 border-white/10 focus:border-ryuking-red/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the purpose of this chat"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="bg-ryuking-dark/50 border-white/10 focus:border-ryuking-red/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="members">Add Members (Comma separated emails)</Label>
              <Input
                id="members"
                placeholder="member1@example.com, member2@example.com"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    members: e.target.value.split(",").map((email) => email.trim()),
                  })
                }
                className="bg-ryuking-dark/50 border-white/10 focus:border-ryuking-red/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="project">Project ID (Optional)</Label>
              <Input
                id="project"
                placeholder="Enter project ID to link"
                onChange={(e) =>
                  setFormData({ ...formData, projectId: e.target.value })
                }
                className="bg-ryuking-dark/50 border-white/10 focus:border-ryuking-red/50"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-white/10 hover:bg-white/5"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-ryuking-red hover:bg-ryuking-red/90"
              >
                Create Chat
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </motion.div>
  )
}
