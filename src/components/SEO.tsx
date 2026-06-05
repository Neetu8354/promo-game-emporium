import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  schema?: object;
  ogImage?: string;
  ogType?: string;
};

const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6d4d9b19-74ce-4cce-b064-9146234b15f0";

const setMeta = (selector: string, attribute: "content" | "href", value: string) => {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
};

const SEO = ({
  title,
  description,
  canonical,
  keywords,
  schema,
  ogImage,
  ogType = "website",
}: SEOProps) => {
  useEffect(() => {
    const absoluteImage = ogImage
      ? ogImage.startsWith("http")
        ? ogImage
        : `https://lotus365ids.live${ogImage.startsWith("/") ? "" : "/"}${ogImage}`
      : DEFAULT_OG_IMAGE;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta(
      'meta[name="keywords"]',
      "content",
      keywords ?? "Lotus365 IDs, cricket betting ID support, casino login help, WhatsApp support India"
    );
    setMeta('link[rel="canonical"]', "href", canonical);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:type"]', "content", ogType);
    setMeta('meta[property="og:image"]', "content", absoluteImage);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", absoluteImage);

    const id = "page-schema";
    document.getElementById(id)?.remove();
    if (schema) {
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [canonical, description, keywords, schema, title, ogImage, ogType]);

  return null;
};

export default SEO;
