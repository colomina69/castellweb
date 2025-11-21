
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { NavigationMenuTrigger } from '@radix-ui/react-navigation-menu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>
    <div>
    <NavigationMenu>
        <NavigationMenuList className="flex-col items-start gap-1">
          <NavigationMenuItem className="w-full">
                <Link href="/login">
        <Button className="m-4">Iniciar Sesión</Button>
      </Link>
      <Link href="/signup">
        <Button className="m-4">Crear Cuenta</Button>
      </Link>
            <NavigationMenuTrigger>
              Item One
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/item-one">
                Go to Item One
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
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