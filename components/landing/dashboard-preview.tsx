"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Bot, User, MessageSquare, Clock, CheckCircle2, AlertCircle } from "lucide-react"

const conversations = [
  {
    id: 1,
    name: "Carlos Rodriguez",
    cedula: "1756789012",
    status: "bot",
    lastMessage: "Consultando estado de RUC...",
    time: "hace 1 min",
    unread: 2,
  },
  {
    id: 2,
    name: "Maria Gonzalez",
    cedula: "1723456789",
    status: "assigned",
    agent: "Ana Torres",
    lastMessage: "Gracias por la informacion",
    time: "hace 3 min",
    unread: 0,
  },
  {
    id: 3,
    name: "Pedro Sanchez",
    cedula: "1798765432",
    status: "bot",
    lastMessage: "Validando cedula...",
    time: "hace 5 min",
    unread: 1,
  },
  {
    id: 4,
    name: "Laura Martinez",
    cedula: "1734567890",
    status: "pending",
    lastMessage: "Necesito hablar con un asesor",
    time: "hace 7 min",
    unread: 3,
  },
]

const validationData = {
  cedula: "1723456789",
  nombre: "Maria Elena Gonzalez Perez",
  ruc: "1723456789001",
  estadoRuc: "ACTIVO",
  tipoContribuyente: "Persona Natural",
  obligaciones: "Al dia",
}

export function DashboardPreview() {
  return (
    <section id="caracteristicas" className="px-6 py-20 lg:px-8 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.span
            className="text-sm font-medium text-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Panel Administrativo
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-balance">Centro de Control en React</span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Gestiona todos los chats en tiempo real, visualiza datos validados 
            e interviene en cualquier momento con un solo clic.
          </motion.p>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-6 py-4">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold text-foreground">Bandeja de Entrada</h3>
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  4 activos
                </Badge>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-accent" />
                  <span>Bot: 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  <span>Humano: 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                  <span>Pendiente: 1</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3">
              <div className="border-r border-border">
                <div className="divide-y divide-border">
                  {conversations.map((conv, idx) => (
                    <motion.div
                      key={conv.id}
                      className={`flex cursor-pointer items-center gap-4 px-4 py-4 transition-colors hover:bg-secondary/50 ${idx === 1 ? "bg-secondary/30" : ""}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <div className="relative">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground">
                          {conv.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full ${
                          conv.status === "bot" ? "bg-accent" : conv.status === "assigned" ? "bg-green-500" : "bg-yellow-500"
                        }`}>
                          {conv.status === "bot" ? (
                            <Bot className="h-3 w-3 text-accent-foreground" />
                          ) : conv.status === "assigned" ? (
                            <CheckCircle2 className="h-3 w-3 text-white" />
                          ) : (
                            <Clock className="h-3 w-3 text-white" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="truncate text-sm font-medium text-foreground">{conv.name}</p>
                          <span className="text-xs text-muted-foreground">{conv.time}</span>
                        </div>
                        <p className="truncate text-xs text-muted-foreground">{conv.lastMessage}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <Badge variant="outline" className="text-xs px-1.5 py-0">
                            {conv.status === "bot" ? "Bot atendiendo" : conv.status === "assigned" ? `Asignado a ${conv.agent}` : "Esperando asignacion"}
                          </Badge>
                          {conv.unread > 0 && (
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-medium text-accent-foreground">
                              {conv.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="border-r border-border lg:col-span-1">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-border px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground">
                        MG
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Maria Gonzalez</p>
                        <p className="text-xs text-accent">Asignado a Ana Torres</p>
                      </div>
                    </div>
                    <button className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary/80">
                      Tomar Chat
                    </button>
                  </div>
                  <div className="flex-1 space-y-3 overflow-y-auto p-4">
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl bg-secondary px-3 py-2">
                        <p className="text-sm text-foreground">Hola, necesito consultar mi estado tributario</p>
                        <p className="mt-1 text-xs text-muted-foreground">10:23 AM</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl bg-accent/20 px-3 py-2">
                        <div className="mb-1 flex items-center gap-1 text-xs text-accent">
                          <Bot className="h-3 w-3" />
                          Omarcellec AI
                        </div>
                        <p className="text-sm text-foreground">Cedula validada. RUC: 1723456789001 - Estado: ACTIVO</p>
                        <p className="mt-1 text-xs text-muted-foreground">10:23 AM</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl bg-primary px-3 py-2">
                        <div className="mb-1 flex items-center justify-end gap-1 text-xs text-primary-foreground/80">
                          Ana Torres
                          <User className="h-3 w-3" />
                        </div>
                        <p className="text-sm text-primary-foreground">Perfecto Maria, veo que estas al dia. Puedo ayudarte con algo mas?</p>
                        <p className="mt-1 text-right text-xs text-primary-foreground/70">10:25 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="border-b border-border px-4 py-3">
                  <h4 className="text-sm font-medium text-foreground">Datos Validados</h4>
                </div>
                <div className="p-4 space-y-4">
                  <div className="rounded-lg border border-border bg-secondary/30 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Cedula</span>
                      <span className="text-sm font-mono text-foreground">{validationData.cedula}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Nombre</span>
                      <span className="text-sm text-foreground">{validationData.nombre}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">RUC</span>
                      <span className="text-sm font-mono text-foreground">{validationData.ruc}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Estado RUC</span>
                      <Badge className="bg-green-500/20 text-green-400">{validationData.estadoRuc}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Tipo</span>
                      <span className="text-sm text-foreground">{validationData.tipoContribuyente}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Obligaciones</span>
                      <Badge className="bg-green-500/20 text-green-400">{validationData.obligaciones}</Badge>
                    </div>
                  </div>
                  <div className="rounded-lg border border-accent/30 bg-accent/10 p-3">
                    <div className="flex items-center gap-2 text-accent">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-sm font-medium">Verificado con WebServices Ecuador</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Ultima actualizacion: hace 2 minutos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
