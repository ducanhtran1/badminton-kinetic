import type { Product } from "@/types";
import { siteConfig } from "@/lib/site";

export function ProductJsonLd({ product }: { product: Product }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description ?? `${product.name} — ${product.category} at Kinetic.`,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "Kinetic",
    },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/product/${product.id}`,
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
    category: product.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
