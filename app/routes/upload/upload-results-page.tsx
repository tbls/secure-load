import { CheckCircle2 } from "lucide-react"
import { useNavigate } from "react-router"

import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

const rows = [
  {
    id: 4,
    name: "Testino Dipubeca",
    nameError: null,
    email: "Testino",
    emailError: "El formato del campo email es invalido.",
    age: "25",
    ageError: null,
  },
  {
    id: 12,
    name: "",
    nameError: "El campo name no puede estar vacio.",
    email: "mario@email.com",
    emailError: null,
    age: "abc",
    ageError: "El campo age debe ser un numero positivo.",
  },
]

export default function UploadResultsPage() {

  const navigate = useNavigate()

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold">Resultados</h1>
        </div>
      </div>

      <Card>
        <CardHeader className="border-b">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 justify-center sm:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                18 registros cargados correctamente
              </div>
            </div>
            <Button 
              size="sm"
              onClick={() => navigate("/app/admin/upload")}
              >
              Nuevo archivo
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="text-sm text-muted-foreground">
            Los (2) registros listados abajo presentan errores. Corrige los
            campos y vuelve a intentar.
          </p>

          <div className="grid gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:grid-cols-[64px_1fr_1fr_120px_120px]">
            <span>Fila</span>
            <span>Nombre</span>
            <span>Email</span>
            <span>Edad</span>
            <span></span>
          </div>

          <div className="space-y-6">
            {rows.map((row) => (
              <div
                key={row.id}
                className="grid items-start gap-3 sm:grid-cols-[64px_1fr_1fr_120px_120px]"
              >
                <div className="text-sm font-medium text-foreground">
                  {row.id}
                </div>

                <div className="space-y-1">
                  <Label htmlFor={`name-${row.id}`} className="sr-only">
                    Nombre
                  </Label>
                  <Input
                    id={`name-${row.id}`}
                    defaultValue={row.name}
                    aria-invalid={Boolean(row.nameError)}
                  />
                  {row.nameError ? (
                    <p className="text-xs text-destructive">{row.nameError}</p>
                  ) : null}
                </div>

                <div className="space-y-1">
                  <Label htmlFor={`email-${row.id}`} className="sr-only">
                    Email
                  </Label>
                  <Input
                    id={`email-${row.id}`}
                    defaultValue={row.email}
                    aria-invalid={Boolean(row.emailError)}
                  />
                  {row.emailError ? (
                    <p className="text-xs text-destructive">{row.emailError}</p>
                  ) : null}
                </div>

                <div className="space-y-1">
                  <Label htmlFor={`age-${row.id}`} className="sr-only">
                    Edad
                  </Label>
                  <Input
                    id={`age-${row.id}`}
                    defaultValue={row.age}
                    aria-invalid={Boolean(row.ageError)}
                  />
                  {row.ageError ? (
                    <p className="text-xs text-destructive">{row.ageError}</p>
                  ) : null}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Reintentar
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
