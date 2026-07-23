const STRAPI_URL =
  (import.meta.env.VITE_STRAPI_URL as string | undefined)?.replace(/\/$/, "") ||
  "http://localhost:1337";

type StrapiEntity<T> = T & {
  id?: number;
  documentId?: string;
  attributes?: T;
};

type StrapiListResponse<T> = {
  data?: Array<StrapiEntity<T>>;
};

const unwrapEntity = <T>(entity: StrapiEntity<T>): T => ({
  ...entity,
  ...(entity.attributes ?? {}),
});

export const strapiAssetUrl = (url?: string | null) => {
  if (!url) return undefined;
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
};

export const fetchStrapiList = async <T>(
  path: string,
  params = "sort=publishedAt:desc&populate=*"
) => {
  const response = await fetch(`${STRAPI_URL}/api/${path}?${params}`);

  if (!response.ok) {
    throw new Error(`Strapi ${path} responded with ${response.status}`);
  }

  const payload = (await response.json()) as StrapiListResponse<T>;
  return (payload.data ?? []).map(unwrapEntity);
};
