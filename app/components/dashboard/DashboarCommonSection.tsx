import { DashboarCard } from "~/components/dashboard/DashboarCard"

const KPIs = [
  {
    title: "Alertas asignadas",
    value: "6",
    description: "Pendientes de resolver",
  },
  {
    title: "Ediciones recientes",
    value: "14",
    description: "Ultimos 7 dias",
  },
  {
    title: "Perfil",
    value: "Completo",
    description: "Ultima edicion hoy",
  }
]

export function DashboarCommonSection() {
  return (
    <section className="mt-6">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Mi seguimiento
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {
          KPIs.map(KPI => {
            return <DashboarCard KPI={KPI} />
          })
        }
      </div>
    </section>
  )
}
