import { NavLink, Form } from "react-router";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { FileText, LayoutDashboard, LogOut, Upload, User } from "lucide-react";

const navSections = [
  {
    title: "General",
    items: [
      { to: "/app", label: "Dashboard", icon: LayoutDashboard, end: true },
      { to: "/app/profile", label: "Mi perfil", icon: User },
    ],
  },
  {
    title: "Admin",
    items: [
      { to: "/app/admin/upload", label: "Carga CSV", icon: Upload , end: true },
      { to: "/app/admin/upload/results/demo-job", label: "Resultados", icon: FileText },
    ],
  },
];

type SidebarNavProps = {
  isAdmin?: boolean;
};

export function SidebarNav({ isAdmin = false }: SidebarNavProps) {
  const visibleSections = isAdmin
    ? navSections
    : navSections.filter((section) => section.title !== "Admin");

  return (
    <nav className="flex flex-col p-2">
      {/* Navigation */}
      <div className="grid gap-2">
        {visibleSections.map((section) => (
          <div key={section.title} className="grid gap-2">
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                    ].join(" ")
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        ))}
      </div>

      <Separator className="my-2" />

      {/* Logout */}
      <Form method="post" action="/auth/logout">
        <Button
          type="submit"
          variant="ghost"
          className="
            w-full justify-start gap-2
            text-destructive
            hover:bg-destructive/10
            hover:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          <span>Cerrar sesión</span>
        </Button>
      </Form>
    </nav>

  );
}
