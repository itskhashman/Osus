import type { NavItem } from "@/domain/navigation";

export const mainNav: NavItem[] = [
  { key: "home", href: "/" },
  { key: "products", href: "/products" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "partners", href: "/partners" },
  { key: "certificates", href: "/certificates" },
  { key: "company", href: "/company" },
];

export const footerCompanyNav: NavItem[] = [
  { key: "company", href: "/company" },
  { key: "projects", href: "/projects" },
  { key: "partners", href: "/partners" },
];

export const footerSolutionsNav: NavItem[] = [
  { key: "products", href: "/products" },
  { key: "services", href: "/services" },
];
