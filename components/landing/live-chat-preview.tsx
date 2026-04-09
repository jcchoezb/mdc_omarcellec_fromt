"use client"

import { motion } from "framer-motion"
import { Bot, User, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

const chatMessages = [
  { type: "user", message: "Hola, necesito consultar el estado de mi RUC" },
  { type: "bot", message: "Bienvenido a AxiomFlow. Por favor, ingrese su numero de cedula para validar su identidad." },
  { type: "user", message: "1712345678" },
  { type: "bot", message: "Validando sus datos con el Registro Civil... Identidad verificada: Juan Perez Martinez. Ahora consultare su estado de RUC..." },
  { type: "bot", message: "Su RUC 1712345678001 esta ACTIVO. Estado tributario: Al dia. Detecto que tiene una consulta compleja. Voy a transferirlo con un asesor humano." },
  { type: "handoff", message: "Asesor Humano Conectado" },
  { type: "human", message: "Hola Juan, soy Maria del equipo de soporte. Veo que tu RUC esta activo. En que mas puedo ayudarte hoy?" },
]

export function LiveChatPreview() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0)

  useEffect(() => {
    if (visibleMessages < chatMessages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [visibleMessages])

  return (
    <section id="producto" className="px-6 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.span
            className="text-sm font-medium text-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Vista en Vivo
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-balance">Transicion Fluida de IA a Humano</span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Observa como la IA maneja consultas, valida datos oficiales y transfiere 
            automaticamente al asesor humano cuando es necesario.
          </motion.p>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                  <Sparkles className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">AxiomFlow AI</p>
                  <p className="text-xs text-muted-foreground">Asistente Inteligente</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-xs text-muted-foreground">En linea</span>
              </div>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {chatMessages.slice(0, visibleMessages).map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.type === "handoff" ? (
                    <div className="flex w-full items-center gap-3 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                        <User className="h-4 w-4 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-accent">{msg.message}</p>
                        <p className="text-xs text-muted-foreground">La conversacion ha sido transferida</p>
                      </div>
                    </div>
                  ) : (
                    <div className={`flex max-w-[80%] items-start gap-2 ${msg.type === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        msg.type === "user" 
                          ? "bg-primary text-primary-foreground" 
                          : msg.type === "human"
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-foreground"
                      }`}>
                        {msg.type === "user" ? (
                          <User className="h-4 w-4" />
                        ) : msg.type === "human" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div className={`rounded-2xl px-4 py-2 ${
                        msg.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground"
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
              {visibleMessages < chatMessages.length && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl bg-secondary px-4 py-2">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]"></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]"></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border bg-secondary/30 px-4 py-3">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  className="flex-1 rounded-full bg-input px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/90">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
