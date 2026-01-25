import { DashboarCard } from "~/modules/dashboard/DashboarCard"
import { Card, CardContent } from "~/components/ui/card"
import { Separator } from "~/components/ui/separator"

const jobs = [
  {
    title: "job-2024-09-18",
    meta: "CSV Clientes",
    status: "Completado",
    detail: "12 alertas",
  },
  {
    title: "job-2024-09-17",
    meta: "CSV Inventario",
    status: "En revision",
    detail: "4 alertas",
  },
  {
    title: "job-2024-09-16",
    meta: "CSV Ventas",
    status: "Completado",
    detail: "Sin errores",
  },
]

const KPIs = [
  {
    title: "Registros con alerta",
    value: "12",
    description: "En los ultimos 3 jobs",

  },
  {
    title: "Campos por corregir",
    value: "43",
    description: "Actualizado hace 1 hora",
  }
]

export function DashboardAdminSection() {
  return (
    <>
      <section className="mt-6">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Actividad reciente
        </div>
        <Card className="gap-0 py-0">
          <CardContent className="px-0">
            {jobs.map((item, index) => (
              <div key={item.title}>
                <div className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.meta}
                    </div>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">
                    {item.status} · {item.detail}
                  </div>
                </div>
                {index < jobs.length - 1 ? <Separator /> : null}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mt-6">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Pendientes
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {
            KPIs.map(KPI => {
              return <DashboarCard KPI={KPI} />
            })
          }
        </div>
      </section>
    </>
  )
}
