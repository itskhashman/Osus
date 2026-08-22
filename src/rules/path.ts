export function assetPath(path : any) {
  const basePath = process.env.NODE_ENV === 'production' ? '/Osus' : '';

  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}