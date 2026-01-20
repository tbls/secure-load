import {
  type RouteConfig,
  index,
  layout,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [

  // Public
  index("routes/home/home-page.tsx"),

  // Auth
  ...prefix("/auth", [
    layout("layouts/auth-layout.tsx", [
      route("login", "routes/auth/login-page.tsx"),
    ]),
  ]),

  // Private (app)
  ...prefix("/app", [
    layout("layouts/app-layout.tsx", [
      index("routes/dashboard/dashboard-page.tsx"),
      route("profile", "routes/profile/profile-page.tsx"),
      
      // Private (admin)
      ...prefix("/admin", [
        layout("layouts/admin-layout.tsx", [
          route("upload", "routes/upload/upload-page.tsx"),
          route("upload/results/:jobId", "routes/upload/upload-results-page.tsx"),
        ]),
      ]),
    ]),

  ]),

  // Forbidden
  route("/forbidden", "routes/forbidden/forbidden-page.tsx"),

  // Catch-all
  route("*", "routes/catch-all/catch-all-page.tsx"),

] satisfies RouteConfig;
