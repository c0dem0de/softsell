"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<
    {
      role: "user" | "assistant";
      content: string;
    }[]
  >([
    {
      role: "assistant",
      content: "👋 Hi there! How can I help you with SoftSell today?",
    },
  ]);

  // Predefined prompt suggestions
  const promptSuggestions = [
    "How do I sell my license?",
    "What's the valuation process?",
    "Is my transaction secure?",
    "How long does the process take?",
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory([...chatHistory, { role: "user", content: message }]);

    // Mock response based on keywords
    setTimeout(() => {
      let response =
        "I'm not sure how to help with that. Could you try asking about our license selling process, pricing, or security measures?";

      const lowerMsg = message.toLowerCase();

      // Check for time/process related questions first
      if (
        lowerMsg.includes("time") ||
        lowerMsg.includes("long") ||
        lowerMsg.includes("process") ||
        lowerMsg.includes("take") ||
        lowerMsg.includes("days") ||
        lowerMsg.includes("duration")
      ) {
        response =
          "The entire process typically takes 3-5 business days from submission to payment. License verification takes 24-48 hours, and once approved, most licenses sell within 72 hours.";
      }
      // Other conditions follow
      else if (
        lowerMsg.includes("sell") ||
        lowerMsg.includes("license") ||
        lowerMsg.includes("how")
      ) {
        response =
          "To sell your license, simply click 'Sell My Licenses' at the top of our page, fill out the license details form, and our team will get back to you with a valuation within 24 hours!";
      } else if (
        lowerMsg.includes("price") ||
        lowerMsg.includes("valuation") ||
        lowerMsg.includes("worth")
      ) {
        response =
          "Our valuations are based on current market demand, license type, remaining duration, and transfer terms. Most customers get 40-70% of the original retail price.";
      } else if (
        lowerMsg.includes("secure") ||
        lowerMsg.includes("safe") ||
        lowerMsg.includes("scam")
      ) {
        response =
          "SoftSell uses bank-level encryption and our escrow system protects both buyers and sellers. We verify all licenses before listing and have a 100% satisfaction guarantee.";
      }

      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
    }, 1000);

    // Clear input
    setMessage("");
  };

  // Handle clicking a prompt suggestion
  const handlePromptClick = (prompt: string) => {
    setMessage(prompt);
    // Automatically send the message when clicked
    setTimeout(() => {
      const event = { preventDefault: () => {} } as React.FormEvent;
      handleSendMessage(event);
    }, 10);
  };

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 w-80 md:w-96 bg-background border border-border rounded-xl shadow-xl z-50 transition-all duration-300 transform",
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Chat header */}
        <div className="p-4 border-b border-border flex items-center justify-between bg-primary/5 dark:bg-8C52FF/10 rounded-t-xl">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF flex items-center justify-center mr-3">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-medium text-sm">SoftSell Support</h3>
              <p className="text-xs text-muted-foreground">
                Typically replies in minutes
              </p>
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <div className="h-80 overflow-y-auto p-4 flex flex-col space-y-4">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={cn(
                "max-w-[80%] rounded-lg p-3",
                msg.role === "user"
                  ? "bg-primary text-primary-foreground ml-auto"
                  : "bg-muted dark:bg-slate-800"
              )}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          ))}
        </div>

        {/* Prompt suggestions */}
        <div className="px-4 py-3 border-t border-border flex flex-wrap gap-2">
          {promptSuggestions.map((prompt, index) => (
            <button
              key={index}
              onClick={() => handlePromptClick(prompt)}
              className="text-xs px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat input */}
        <form
          onSubmit={handleSendMessage}
          className="p-4 border-t border-border flex items-center"
        >
          <input
            type="text"
            placeholder="Ask a question..."
            className="flex-1 bg-transparent border-none focus:outline-none text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit" size="sm" variant="ghost" className="ml-2">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </>
  );
}
