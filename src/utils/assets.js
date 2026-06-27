const CACHE_BUSTER = Math.random().toString(36).substring(2, 8);

/**
 * Resolves local asset paths with the base URL and appends a query parameter to bust caches.
 * Works for both local assets and external URLs.
 */
export function getImageUrl(url) {
  if (!url) return '';
  
  let resolvedUrl = url;
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
    resolvedUrl = `${import.meta.env.BASE_URL || '/'}${cleanUrl}`;
  }
  
  const separator = resolvedUrl.includes('?') ? '&' : '?';
  return `${resolvedUrl}${separator}cb=${CACHE_BUSTER}`;
}
