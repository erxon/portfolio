"use client";

import React, { useState } from "react";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { useChat, type UseChatHelpers } from "@ai-sdk/react";
import { useRef, useEffect } from "react";
import { MyImage } from "./my-image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showGreeting, setShowGreeting] = useState(true);
  const { messages, sendMessage, status, error } = useChat({
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const isTyping = status === "submitted" || status === "streaming";
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  const handleSend = async () => {
    if (!input.trim()) return;
    const currentInput = input;
    setInput("");
    await sendMessage({ parts: [{ type: "text", text: currentInput }] });
  };
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div className="flex items-center gap-2">
            <AnimatePresence>
              {!isOpen && showGreeting && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm opacity-80 p-4 bg-primary text-primary-foreground rounded-full"
                >
                  Hi I'm Ericson, you can chat with me here!
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              size="icon"
              className="h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MessageCircle className="h-6 w-6" />
              )}
            </Button>
          </div>
        </PopoverTrigger>

        <PopoverContent
          side="top"
          align="end"
          className="w-80 p-0 mb-4 overflow-hidden rounded-xl"
        >
          {/* Header */}
          <div className="bg-primary p-4 text-primary-foreground">
            <MyImage />
            <h3 className="font-semibold">Ericson Castasus</h3>
            <p className="text-xs opacity-90">Ask me anything about me.</p>
          </div>

          {/* Chat Body */}
          <ScrollArea className="h-72 p-4">
            <div className="space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({ children }) => (
                          <p className="mb-2 last:mb-0">{children}</p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc ml-4 mb-2">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal ml-4 mb-2">{children}</ol>
                        ),
                        li: ({ children }) => (
                          <li className="mb-1">{children}</li>
                        ),
                        code: ({ children }) => (
                          <code className="bg-muted px-1 rounded text-xs">
                            {children}
                          </code>
                        ),
                        a: ({ children, href }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline hover:opacity-80 transition-opacity"
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {m.parts
                        .map((part) => (part.type === "text" ? part.text : ""))
                        .join("")}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg px-3 py-2">
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
              {/* Invisible anchor for scrolling */}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input Footer */}
          <div className="p-4 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon" className="h-9 w-9">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
