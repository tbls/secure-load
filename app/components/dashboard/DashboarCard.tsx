import type { ReactNode } from "react"
import { Card, CardContent } from "~/components/ui/card"
import { cn } from "~/lib/utils"

type KPIType = {
  title: string
  value: ReactNode
  description: string
}

type DashboarCardProps = {
  KPI: KPIType
}

export function DashboarCard({KPI}: DashboarCardProps) {

  const { title, value, description } = KPI

  return (
    <Card className="gap-2 py-4">
      <CardContent className="px-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {title}
        </div>
        <div
          className="mt-2 text-2xl font-semibold text-foreground"
        >
          {value}
        </div>
        <div className="mt-1 text-xs text-muted-foreground">{description}</div>
      </CardContent>
    </Card>
  )
}
