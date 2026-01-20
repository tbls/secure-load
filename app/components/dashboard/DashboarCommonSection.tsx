import { DashboarCard } from "~/components/dashboard/DashboarCard"

const KPIs = [
  {
    id: "1",
    title: "Alertas asignadas",
    value: "6",
    description: "Pendientes de resolver",
  },
  {
    id: "2",
    title: "Ediciones recientes",
    value: "14",
    description: "Ultimos 7 dias",
  },
  {
    id: "3",
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
            return <DashboarCard key={KPI.id} KPI={KPI} />
          })
        }
      </div>
    </section>
  )
}
