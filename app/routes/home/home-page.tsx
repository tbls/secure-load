import { Welcome } from "../../home/components/Welcome";
import type { Route } from "./+types/home-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SecureLoad | Home" },
    {
      name: "description",
      content: "Carga segura de archivos con trazabilidad y control por rol.",
    },
  ];
}

export default function HomePage() {
  return <Welcome />;
}
