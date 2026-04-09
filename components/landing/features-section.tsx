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
  },
  {
    icon: Shield,
    title: "Validacion Oficial",
    description: "Verificacion en tiempo real de Cedula y RUC con integracion directa a WebServices Ecuador.",
  },
  {
    icon: Users,
    title: "Gestion Multiagente",
    description: "Panel administrativo para que multiples asesores gestionen conversaciones simultaneamente.",
  },
  {
    icon: BarChart3,
    title: "Analiticas Avanzadas",
    description: "Metricas detalladas de rendimiento, tiempos de respuesta y satisfaccion del cliente.",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "La IA atiende consultas las 24 horas, los 7 dias de la semana sin interrupciones.",
  },
  {
    icon: Sparkles,
    title: "IA Conversacional",
    description: "Procesamiento de lenguaje natural avanzado para entender y responder con precision.",
  },
  {
    icon: FileText,
    title: "Plantillas Dinamicas",
    description: "Respuestas predefinidas que los asesores pueden usar para agilizar la atencion.",
  },
  {
    icon: CreditCard,
    title: "Pagos y Facturas",
    description: "Integracion con sistemas de facturacion electronica para procesar pagos desde el chat.",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.span
            className="text-sm font-medium text-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Caracteristicas
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-balance">Todo lo que Necesitas para Escalar</span>
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
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
