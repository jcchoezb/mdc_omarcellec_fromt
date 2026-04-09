"use client"

import { motion } from "framer-motion"
import { 
  MessageSquare, 
  GitBranch, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  FileText,
  Bot,
  User,
  Sparkles
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const workflowSteps = [
  {
    icon: User,
    title: "Cliente Inicia Conversacion",
    description: "El cliente escribe en lenguaje natural su consulta o solicitud",
    example: '"Quiero consultar mi saldo"',
    color: "from-primary to-primary/70",
  },
  {
    icon: Bot,
    title: "IA Interpreta Intencion",
    description: "Nuestro motor de IA analiza y comprende la solicitud del cliente",
    example: "Intencion detectada: CONSULTA_SALDO",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: GitBranch,
    title: "Activa Flujo Preconfigurado",
    description: "Se inicia el arbol de decision configurado para ese proceso",
    example: "Flujo: Verificacion → Consulta → Respuesta",
    color: "from-accent to-accent/70",
  },
  {
    icon: CheckCircle2,
    title: "Ejecuta Plantillas Paso a Paso",
    description: "Cada plantilla solicita datos o informa al cliente segun el flujo",
    example: "Plantilla: Solicitar cedula de identidad",
    color: "from-primary via-secondary to-accent",
  },
]

const templateTypes = [
  {
    type: "Solicitud de Datos",
    icon: MessageSquare,
    description: "Pide informacion especifica al cliente",
    examples: ["Cedula de identidad", "Numero de cuenta", "Fecha de nacimiento"],
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    type: "Mensaje Informativo",
    icon: FileText,
    description: "Muestra informacion sin requerir respuesta",
    examples: ["Confirmacion de proceso", "Terminos y condiciones", "Estado actual"],
    color: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    type: "Validacion de Datos",
    icon: CheckCircle2,
    description: "Verifica datos contra APIs oficiales",
    examples: ["Validar cedula SRI", "Verificar RUC", "Confirmar identidad"],
    color: "bg-accent/10 text-accent border-accent/20",
  },
  {
    type: "Decision Condicional",
    icon: GitBranch,
    description: "Bifurca el flujo segun la respuesta",
    examples: ["Si/No opciones", "Menu de servicios", "Rutas alternativas"],
    color: "bg-primary/10 text-primary border-primary/20",
  },
]

export function TemplatesWorkflowSection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-[100px]" />
      </div>
      
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4 border-secondary/40 text-secondary">
              <Settings className="mr-2 h-3 w-3" />
              Configuracion Personalizada
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-foreground">Flujos de Trabajo </span>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Inteligentes
            </span>
          </motion.h2>
          
          <motion.p
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Preconfigure los procesos de su empresa mediante plantillas personalizables. 
            Cuando la IA interpreta la intencion del cliente, activa automaticamente 
            el arbol de decision correspondiente, guiando paso a paso cada interaccion.
          </motion.p>
        </div>

        {/* Workflow Steps */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent hidden lg:block" style={{ transform: 'translateY(-50%)' }} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all hover:-translate-y-1">
                    {/* Step Number */}
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${step.color} text-white text-sm font-bold mb-4`}>
                      {idx + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className={`h-5 w-5 bg-gradient-to-br ${step.color} bg-clip-text`} style={{ color: idx === 0 ? 'hsl(var(--primary))' : idx === 1 ? 'hsl(var(--secondary))' : 'hsl(var(--accent))' }} />
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    
                    {/* Example */}
                    <div className="bg-muted/50 rounded-lg px-3 py-2">
                      <code className="text-xs text-primary">{step.example}</code>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Template Types */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Tipos de Plantillas Configurables
            </h3>
            <p className="text-muted-foreground">
              Cada plantilla se adapta a las necesidades especificas de su proceso
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templateTypes.map((template, idx) => (
              <motion.div
                key={idx}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-4 ${template.color}`}>
                  <template.icon className="h-3 w-3" />
                  {template.type}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                
                <div className="space-y-2">
                  {template.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-foreground">
                      <Sparkles className="h-3 w-3 text-primary" />
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Flow Demo */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-border rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
                Ejemplo Practico
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Flujo de Consulta de Saldo
              </h3>
              <p className="text-muted-foreground mb-6">
                Vea como un proceso completo se ejecuta automaticamente una vez 
                que la IA identifica la intencion del cliente.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Plantilla: Bienvenida</p>
                    <p className="text-sm text-muted-foreground">Saludo personalizado + Menu de opciones</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-secondary">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Plantilla: Solicitar Cedula</p>
                    <p className="text-sm text-muted-foreground">Pide numero de identificacion para validar</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Plantilla: Validacion API</p>
                    <p className="text-sm text-muted-foreground">Verifica cedula con WebServices Ecuador</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Plantilla: Mostrar Saldo</p>
                    <p className="text-sm text-muted-foreground">Presenta informacion del sistema interno</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Tree */}
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <GitBranch className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Arbol de Decision</span>
                </div>
                
                <div className="space-y-4">
                  {/* Root Node */}
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Inicio: Consulta Saldo
                    </div>
                  </div>
                  
                  {/* Connector */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-secondary to-accent" />
                  </div>
                  
                  {/* Branch */}
                  <div className="flex justify-center gap-4">
                    <div className="bg-secondary/10 border border-secondary/30 px-3 py-2 rounded-lg text-xs">
                      Pedir Cedula
                    </div>
                  </div>
                  
                  {/* Connector */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-secondary to-accent" />
                  </div>
                  
                  {/* Decision Node */}
                  <div className="flex justify-center">
                    <div className="bg-accent/10 border border-accent/30 px-3 py-2 rounded-lg text-xs flex items-center gap-2">
                      <GitBranch className="h-3 w-3 text-accent" />
                      Validar API
                    </div>
                  </div>
                  
                  {/* Branch connectors */}
                  <div className="flex justify-center gap-20">
                    <div className="text-center">
                      <div className="w-0.5 h-4 bg-green-500 mx-auto" />
                      <div className="bg-green-500/10 border border-green-500/30 px-3 py-2 rounded-lg text-xs text-green-600">
                        Valido: Mostrar Saldo
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-0.5 h-4 bg-red-500 mx-auto" />
                      <div className="bg-red-500/10 border border-red-500/30 px-3 py-2 rounded-lg text-xs text-red-600">
                        Invalido: Reintentar
                      </div>
                    </div>
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
