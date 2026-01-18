export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-xs font-semibold uppercase text-background">
            SL
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-foreground">SecureLoad</div>
          </div>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <span className="hidden rounded-full border bg-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground sm:inline-flex">
            Admin
          </span>
          <div className="flex items-center gap-2 rounded-full border bg-background px-2.5 py-1.5">

            <span className="text-sm font-medium text-foreground">
              Tommy
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
