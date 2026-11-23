import type { NextConfig } from "next";

// EXPORT_STATIQUE=1 produit un site statique dans out/, servi par nginx sur le
// serveur. Sans cette variable (développement, Vercel), rien ne change.
const exportStatique = process.env.EXPORT_STATIQUE === "1";

const nextConfig: NextConfig = exportStatique
  ? { output: "export", images: { unoptimized: true } }
  : {};

export default nextConfig;
