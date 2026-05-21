"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle2, Sparkles, Shield, Headphones } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
      {/* Background subtle */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Badge */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Nuevo: Handoff Inteligente IA a Humano
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">Automatizacion con</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sentido Humano
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Potencia tu atencion al cliente con IA conversacional en WhatsApp. 
          Validacion de datos oficiales, escalamiento automatico a asesores humanos 
          y panel de control en tiempo real.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Sin tarjeta de credito</h3>
                <p className="mt-1 text-sm text-muted-foreground">Comienza sin compromisos ni pagos iniciales</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">14 dias de prueba gratis</h3>
                <p className="mt-1 text-sm text-muted-foreground">Acceso completo a todas las funciones</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary dark:bg-muted dark:text-foreground">
                <Headphones className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Soporte 24/7</h3>
                <p className="mt-1 text-sm text-muted-foreground">Equipo dedicado siempre disponible</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
