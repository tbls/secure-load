import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function Welcome() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 pb-20 pt-16 sm:pt-24">
        <header className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-border bg-secondary px-3 py-1 text-xs uppercase tracking-[0.3em] text-secondary-foreground/80">
            SecureLoad
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Carga segura de archivos con trazabilidad y control total.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Centraliza cargas sensibles, asigna permisos por rol y entrega
            reportes claros en minutos.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg">
              <Link to="/auth/login">Iniciar sesion</Link>
            </Button>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-5 shadow-md"
            >
              <p className="text-sm font-semibold text-foreground">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </section>

      </div>
      
    </main>
  );
}

const highlights = [
  {
    title: "Cargas cifradas",
    description: "Transito seguro y almacenamiento protegido por defecto.",
  },
  {
    title: "Permisos por rol",
    description: "Define quien sube, aprueba y consulta cada archivo.",
  },
  {
    title: "Resultados claros",
    description: "Reportes listos para auditorias y equipos operativos.",
  },
];
