import { Outlet } from "react-router";
import { AppHeader } from "~/components/AppHeader";
import { SidebarNav } from "~/components/SidebarNav";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader />
      <div className="mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col">
        <div className="grid min-h-0 flex-1 md:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="h-full border-r">
            <div className="flex h-full flex-col">
              <div className="px-4 py-3">
                <div className="text-sm font-semibold">Navegación</div>
              </div>
              <div className="flex-1 overflow-y-auto">
                <SidebarNav />
              </div>
            </div>
          </aside>
          {/* Main */}
          <main className="flex-1 p-4 md:p-6">
            <div className="mx-auto max-w-5xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}