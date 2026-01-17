import { Welcome } from "../../home/components/welcome";
import type { Route } from "./+types/home-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HomePage() {
  return <Welcome />;
}
