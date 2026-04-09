"use client"

import { motion } from "framer-motion"
import { Eye, Target, Sparkles } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <motion.span
            className="inline-block text-sm font-semibold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Quienes Somos
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-foreground">Nuestra </span>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Vision y Mision</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Vision */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/20">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">Vision</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Ser la plataforma lider en automatizacion inteligente de comunicaciones en Latinoamerica, 
                transformando la manera en que las empresas se conectan con sus clientes mediante 
                tecnologia de IA que mantiene el toque humano esencial en cada interaccion.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-primary font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Innovacion con proposito humano</span>
              </div>
            </div>
          </motion.div>

          {/* Mision */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-secondary/20 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/60 shadow-lg shadow-secondary/20">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">Mision</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Empoderar a las empresas con soluciones de automatizacion que combinan inteligencia artificial 
                avanzada con la calidez del servicio humano, permitiendo atender a sus clientes 24/7, 
                reducir costos operativos y mejorar la experiencia del usuario final.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-secondary font-medium">
                <Target className="h-4 w-4" />
                <span>Tecnologia al servicio de las personas</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { title: "Innovacion", desc: "Siempre a la vanguardia tecnologica", color: "from-primary to-primary/60" },
            { title: "Confianza", desc: "Seguridad y transparencia en cada proceso", color: "from-secondary to-secondary/60" },
            { title: "Humanidad", desc: "La tecnologia debe servir a las personas", color: "from-accent to-accent/60" },
          ].map((valor, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-card p-5 text-center hover:border-primary/30 transition-colors"
            >
              <h4 className={`text-lg font-bold bg-gradient-to-r ${valor.color} bg-clip-text text-transparent`}>
                {valor.title}
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">{valor.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
