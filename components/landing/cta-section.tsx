"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section id="precios" className="px-6 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 px-8 py-16 text-center sm:px-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/20 blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-accent/15 blur-[80px]" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Transforma tu Atencion al Cliente Hoy</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Unete a las empresas que ya estan automatizando su atencion con IA 
            sin perder el toque humano. Comienza tu prueba gratuita de 14 dias.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
              Comenzar Prueba Gratis
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-secondary/40 hover:bg-secondary/10 hover:border-secondary/60">
              Agendar Demo Personalizada
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Sin tarjeta de credito requerida. Cancela cuando quieras.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
