"use client"

import { motion } from "framer-motion"
import { MessageSquare, Bot, Database, User, ArrowRight, Check } from "lucide-react"

const workflowSteps = [
  {
    icon: MessageSquare,
    title: "Mensaje WhatsApp",
    description: "El cliente inicia una conversacion por WhatsApp",
    color: "bg-green-500",
  },
  {
    icon: Bot,
    title: "Procesamiento IA",
    description: "La IA analiza la intencion y responde automaticamente",
    color: "bg-accent",
  },
  {
    icon: Database,
    title: "Validacion APIs",
    description: "Integracion con WebServices Ecuador y Easyhermes",
    color: "bg-blue-500",
  },
  {
    icon: User,
    title: "Handoff Humano",
    description: "Transferencia automatica si se detecta complejidad",
    color: "bg-orange-500",
  },
]

export function WorkflowSection() {
  return (
    <section id="integraciones" className="px-6 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.span
            className="text-sm font-medium text-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Flujo de Trabajo
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-balance">Workflows Hibridos Inteligentes</span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Cada mensaje pasa por un flujo optimizado que combina la eficiencia de la IA 
            con el toque humano cuando mas importa.
          </motion.p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute top-1/2 left-0 right-0 hidden h-0.5 -translate-y-1/2 bg-border lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl ${step.color} shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 grid gap-8 lg:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
              <MessageSquare className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">API WhatsApp Business</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Integracion oficial con WhatsApp Business API para mensajeria segura y escalable.
            </p>
            <ul className="mt-4 space-y-2">
              {["Mensajes ilimitados", "Plantillas aprobadas", "Multimedia soportado"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
              <Database className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">WebServices Ecuador</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Validacion en tiempo real de Cedula, RUC y datos del Registro Civil ecuatoriano.
            </p>
            <ul className="mt-4 space-y-2">
              {["Validacion de Cedula", "Consulta estado RUC", "Datos del SRI"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
              <Bot className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Easyhermes</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Plataforma de mensajeria multicanal para gestion unificada de comunicaciones.
            </p>
            <ul className="mt-4 space-y-2">
              {["SMS masivos", "Notificaciones push", "Email transaccional"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
