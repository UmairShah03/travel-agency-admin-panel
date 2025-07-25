import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  route("sign-in", "routes/root/SignIn.tsx"),
  route("api/create-trip", "routes/api/CreateTrip.ts"),
  layout("routes/admin/AdminLayout.tsx", [
    route("dashboard", "routes/admin/Dashboard.tsx"),
    route("all-users", "routes/admin/AllUsers.tsx"),
    route("trips", "routes/admin/Trips.tsx"),
    route("trips/create", "routes/admin/createTrips.tsx"),
  ]),
] satisfies RouteConfig;
