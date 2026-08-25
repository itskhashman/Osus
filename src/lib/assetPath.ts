export function assetPath(path: string) {
  const base =
    process.env.NODE_ENV === "development"
      ? ""
      : process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (typeof window === "undefined") {
    return `${base}${path}`;
  }

  const { hostname, pathname } = window.location;
  const isLocalHost = hostname === "localhost" || hostname === "127.0.0.1";

  if (isLocalHost) {
    return path;
  }

  if (pathname === base || pathname.startsWith(`${base}/`)) {
    return `${base}${path}`;
  }

  return path;
}
