"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-lg">
              <span className="text-sm font-bold text-white">O</span>
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Omarcellec
            </span>
          </Link>
          <div className="hidden lg:flex lg:gap-x-8">
            <Link href="#producto" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Producto
            </Link>
            <Link href="#caracteristicas" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Caracteristicas
            </Link>
            <Link href="#integraciones" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Integraciones
            </Link>
            <Link href="#precios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Precios
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
            Iniciar Sesion
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/20 hover:shadow-lg">
            Solicitar Demo
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-4">
            <Link href="#producto" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
              Producto
            </Link>
            <Link href="#caracteristicas" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
              Caracteristicas
            </Link>
            <Link href="#integraciones" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
              Integraciones
            </Link>
            <Link href="#precios" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
              Precios
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" size="sm" className="w-full justify-center">
                Iniciar Sesion
              </Button>
              <Button size="sm" className="w-full justify-center">
                Solicitar Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
