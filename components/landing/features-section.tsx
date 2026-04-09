"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  Sparkles,
  FileText,
  CreditCard
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Handoff Inteligente",
    description: "Transferencia automatica a asesores humanos cuando la IA detecta complejidad o el cliente lo solicita.",
    color: "from-primary to-primary/60",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Validacion Oficial",
    description: "Verificacion en tiempo real de Cedula y RUC con integracion directa a WebServices Ecuador.",
    color: "from-secondary to-secondary/60",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Users,
    title: "Gestion Multiagente",
    description: "Panel administrativo para que multiples asesores gestionen conversaciones simultaneamente.",
    color: "from-accent to-accent/60",
    bgColor: "bg-accent/10",
  },
  {
    icon: BarChart3,
    title: "Analiticas Avanzadas",
    description: "Metricas detalladas de rendimiento, tiempos de respuesta y satisfaccion del cliente.",
    color: "from-primary via-secondary to-accent",
    bgColor: "bg-primary/10",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "La IA atiende consultas las 24 horas, los 7 dias de la semana sin interrupciones.",
    color: "from-secondary to-secondary/60",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Sparkles,
    title: "IA Conversacional",
    description: "Procesamiento de lenguaje natural avanzado para entender y responder con precision.",
    color: "from-accent to-accent/60",
    bgColor: "bg-accent/10",
  },
  {
    icon: FileText,
    title: "Plantillas Dinamicas",
    description: "Respuestas predefinidas que los asesores pueden usar para agilizar la atencion.",
    color: "from-primary to-primary/60",
    bgColor: "bg-primary/10",
  },
  {
    icon: CreditCard,
    title: "Pagos y Facturas",
    description: "Integracion con sistemas de facturacion electronica para procesar pagos desde el chat.",
    color: "from-secondary via-accent to-primary",
    bgColor: "bg-secondary/10",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.span
            className="inline-block text-sm font-semibold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Caracteristicas
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-balance text-foreground">Todo lo que Necesitas para </span>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Escalar</span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Una plataforma completa que combina automatizacion inteligente con la calidez humana 
            para ofrecer la mejor experiencia a tus clientes.
          </motion.p>
        </div>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx }}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor} transition-all group-hover:scale-110`}>
                <feature.icon className={`h-6 w-6 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} style={{ stroke: 'url(#gradient)' }} />
              </div>
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
