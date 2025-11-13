'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { authClient, signUp } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { set } from "zod"

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    console.log({ name, email, password, confirmPassword });

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

     if (password.length < 8) {
       setError("La contraseña debe tener al menos 8 caracteres");
       return;
    }

    setLoading(true);

    try {
      const result = await signUp.email({
        email,
        name,
        password,
      });
      if (result.error) {
        setError(result.error.message || "El registro falló");
      } else {
        router.push("/pagina");
      }
    } catch (err) {
      setError("Ocurrió un error durante el registro");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Crear una cuenta</CardTitle>
        <CardDescription>
          Ingresa tu información a continuación para crear tu cuenta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Nombre Completo</FieldLabel>
              <Input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Juan García" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Correo Electrónico</FieldLabel>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="correo@ejemplo.com"
                required
              />
              <FieldDescription>
                Usaremos esto para contactarte. No compartiremos tu correo
                con nadie más.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Contraseña</FieldLabel>
              <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" required />
              <FieldDescription>
                Debe tener al menos 8 caracteres.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirmar Contraseña
              </FieldLabel>
              <Input id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="confirm-password" type="password" required />
              <FieldDescription>Por favor, confirma tu contraseña.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Crear Cuenta</Button>
                <FieldDescription className="px-6 text-center">
                  ¿Ya tienes una cuenta? <a href="#">Inicia sesión</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </CardContent>
    </Card>
  )
}
