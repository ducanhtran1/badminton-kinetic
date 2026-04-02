import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/views/ProductDetail";
import { ProductJsonLd } from "@/components/seo/ProductJsonLd";
import { PRODUCTS } from "@/constants";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    return { title: "Product" };
  }
  const title = product.name;
  const description =
    product.description?.slice(0, 155) ??
    `${product.name} — ${product.category}. Pro badminton gear at Kinetic.`;
  const url = `${siteConfig.url}/product/${id}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Kinetic`,
      description,
      url,
      images: [{ url: product.image, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Kinetic`,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <>
      <ProductJsonLd product={product} />
      <ProductDetail />
    </>
  );
}
