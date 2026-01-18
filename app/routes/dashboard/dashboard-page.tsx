import { DashboarCommonSection } from "~/components/dashboard/DashboarCommonSection";
import { DashboardAdminSection } from "~/components/dashboard/DashboardAdminSection";

export default function DashboardPage() {

  const isAdmin = true;

  return (
    <>
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="text-xs font-medium text-slate-500">
          Ultima actualizacion hace 2 min
        </div>
      </div>

      <DashboarCommonSection />

      {isAdmin && <DashboardAdminSection />}

    </>
  );
}
