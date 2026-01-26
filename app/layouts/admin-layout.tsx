import { Outlet, redirect } from "react-router";
import { getSession } from "~/server/auth/session.server";

export const loader = async ({ request }: { request: Request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  const role = session.get("role");
  console.log(role);
  
  if (role !== "admin") {
    return redirect("/app/forbidden");
  }
  return null;
};

export default function AdminLayout() {
  return (
    <Outlet />
  )
}