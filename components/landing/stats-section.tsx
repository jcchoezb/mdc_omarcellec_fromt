"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "98%", label: "de consultas resueltas por IA", company: "Empresas PYME", color: "from-primary to-primary/70" },
  { value: "3x", label: "mas rapido en validacion de datos", company: "Sector Financiero", color: "from-secondary to-secondary/70" },
  { value: "45%", label: "reduccion en costos de atencion", company: "Retail", color: "from-accent to-accent/70" },
  { value: "24/7", label: "disponibilidad sin interrupciones", company: "Telecomunicaciones", color: "from-primary via-secondary to-accent" },
]

export function StatsSection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid gap-8 border-y border-border py-12 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
            >
              <p className={`text-4xl font-bold lg:text-5xl bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>{stat.value}</p>
              <p className="mt-2 text-sm text-foreground font-medium">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.company}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
