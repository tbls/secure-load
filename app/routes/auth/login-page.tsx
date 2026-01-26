import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { FieldError } from "~/components/ui/field"

import { redirect, data, Form, useLoaderData } from "react-router"
import { login } from "~/modules/auth/auth.service"
import type { Credentials } from "~/modules/auth/auth.types"
import { getSession, commitSession } from "~/server/auth/session.server"
import type { Route } from "./+types/login-page"

export const loader = async ({ request }: Route.LoaderArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId")) {
    return redirect("/app");
  }
  return data(
    { error: session.get('error') },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

export const action = async ({ request }: Route.ActionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const credential: Credentials = { email, password };
  let authSession: { userId: string; role: string };

  try {
    authSession = await login(credential);
  } catch {
    session.flash("error", "Credenciales incorrectas");
    return redirect("/auth/login", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    })
  }

  session.set("userId", authSession.userId);
  session.set("role", authSession.role);

  return redirect("/app", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  })
}

export default function LoginPage() {

  const { error } = useLoaderData<typeof loader>();

  return (
    <Card className="p-6 md:p-8">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Bienvenido</CardTitle>
      </CardHeader>
      <CardContent>
        <Form method="post" action="/auth/login">
          <FieldGroup>
            {error ? <FieldError className="text-center">{error}</FieldError> : null}
            <Field>
              <FieldLabel htmlFor="email">Correo</FieldLabel>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="user@secureload.com"
                required
              />
            </Field>
            <Field>
              <div className="flex items-center">
                <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                <a
                  href="#"
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="**********"
                required />
            </Field>
            <Field>
              <Button type="submit">Iniciar Sesión</Button>
              <FieldDescription className="text-center">
                ¿No tienes una cuenta? <a href="#">Registrate</a>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </Form>
      </CardContent>
    </Card>
  )
}
