export type NavKey =
  | "home"
  | "products"
  | "services"
  | "projects"
  | "partners"
  | "certificates"
  | "company"
  | "contact";

export type NavItem = {
  key: NavKey;
  href: string;
};
