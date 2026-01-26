import { redirect } from "react-router";
import { destroySession, getSession } from "~/server/auth/session.server";
import type { Route } from "../actions/+types/logout.action";


export async function action({ request }: Route.ActionArgs) {
  console.log("Logout Accion")
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/auth/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}