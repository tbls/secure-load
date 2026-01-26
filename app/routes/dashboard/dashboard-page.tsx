import { useLoaderData } from "react-router";
import { DashboarCommonSection } from "~/modules/dashboard/DashboarCommonSection";
import { DashboardAdminSection } from "~/modules/dashboard/DashboardAdminSection";
import { getSession } from "~/server/auth/session.server";

export const loader = async ({ request }: { request: Request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const role = session.get("role");
  return { role };
};

export default function DashboardPage() {
  const { role } = useLoaderData<typeof loader>();

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

      {role === "admin" && <DashboardAdminSection />}

    </>
  );
}
