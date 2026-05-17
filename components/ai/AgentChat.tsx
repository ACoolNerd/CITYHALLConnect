"use client";
import { useState } from "react";
import { agents } from "../../data/appData";
import { Bot, User, Send, Sparkles } from "lucide-react";

interface Message {
  role: string;
  content: string;
  agent?: string;
}

export default function AgentChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "I am ACoolPROMPT. How can I assist with your ecosystem strategy today?", agent: "ACoolPROMPT" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessages: Message[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // Mock response
    setTimeout(() => {
      setMessages([...newMessages, { 
        role: "assistant", 
        content: `Analyzing "${input}"... Deployment of requested agentic workflow is recommended. Target Timmy Score: 9.8/10.`,
        agent: "ACoolPROMPT"
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[600px] rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-neutral-800 bg-black/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white uppercase tracking-widest">ACoolPROMPT</span>
            <span className="text-[10px] text-emerald-500 font-mono">STATUS: OPERATIONAL</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
            {agents.map(a => (
                <div key={a.id} className="w-2 h-2 rounded-full bg-emerald-500" title={a.name} />
            ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'assistant' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-blue-500/20 text-blue-500'}`}>
              {m.role === 'assistant' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
            </div>
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'assistant' ? 'bg-neutral-800 text-neutral-200' : 'bg-blue-600 text-white'}`}>
              {m.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-black/40 border-t border-neutral-800">
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a strategic directive..."
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-6 pr-12 text-sm text-white focus:border-emerald-500 outline-none"
          />
          <button 
            onClick={handleSend}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-500 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
