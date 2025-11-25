
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { NavigationMenuTrigger } from '@radix-ui/react-navigation-menu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>
      <nav className="w-full bg-white/80 backdrop-blur sticky top-0 z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/escudfila.png" alt="Logo" width={40} height={40} />
              <span className="font-semibold text-lg">Moros del Castell</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/" className="text-sm text-gray-700 hover:underline">Inicio</Link>
              <Link href="/about" className="text-sm text-gray-700 hover:underline">Nosotros</Link>
              <Link href="/contact" className="text-sm text-gray-700 hover:underline">Contacto</Link>
              <Link href="/login">
                <Button className="ml-2">Iniciar Sesión</Button>
              </Link>
              <Link href="/signup">
                <Button className="ml-2">Crear Cuenta</Button>
              </Link>
            </div>

            {/* Mobile menu (no JS required) */}
            <div className="md:hidden">
              <details className="relative">
                <summary className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="sr-only">Abrir menú</span>
                </summary>

                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border">
                  <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Inicio</Link>
                  <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Nosotros</Link>
                  <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Contacto</Link>
                  <div className="border-t mt-1" />
                  <Link href="/login" className="block px-4 py-2">
                    <Button className="w-full text-left">Iniciar Sesión</Button>
                  </Link>
                  <Link href="/signup" className="block px-4 py-2">
                    <Button className="w-full text-left">Crear Cuenta</Button>
                  </Link>
                </div>
              </details>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="flex min-h-screen flex-col items-center justify-center p-24">

        <Image
          className="mb-3"
          src="/escudfila.png"
          alt="Escudo Fila"
          width={112}
          height={112}
          priority
        />

      </div>
    </div>
  )
}

export default Home