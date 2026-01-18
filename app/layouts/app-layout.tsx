import { Outlet } from "react-router";
import { AppHeader } from "~/components/dashboard/AppHeader";
import { SidebarNav } from "~/components/dashboard/SidebarNav";

export default function AppLayout() {

  console.log("AppLayout");
  
  return (
    <div className="min-h-100 bg-background">

      <AppHeader />

      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-[240px_1fr]">
          {/* Desktop Sidebar */}
          <aside className="border-r">
            <div className="px-4 py-3">
              <div className="text-sm font-semibold">Navegación</div>
            </div>
            <SidebarNav />
          </aside>
          {/* Main */}
          <main className="p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}