
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        className="mb-3"
        src="/escudfila.png"
        alt="Escudo Fila"
        width={112}
        height={112}
        priority
      />
      <Link href="/login">
        <Button className="m-4">Iniciar Sesión</Button>
      </Link>
      <Link href="/signup">
        <Button className="m-4">Crear Cuenta</Button>
      </Link>
    </div>
  )
}

export default Home