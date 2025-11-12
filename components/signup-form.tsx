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

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Crear una cuenta</CardTitle>
        <CardDescription>
          Ingresa tu información a continuación para crear tu cuenta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Nombre Completo</FieldLabel>
              <Input id="name" type="text" placeholder="Juan García" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Correo Electrónico</FieldLabel>
              <Input
                id="email"
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
              <Input id="password" type="password" required />
              <FieldDescription>
                Debe tener al menos 8 caracteres.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirmar Contraseña
              </FieldLabel>
              <Input id="confirm-password" type="password" required />
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
      </CardContent>
    </Card>
  )
}
