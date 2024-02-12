/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "@/styles/mixins/breakpoint.scss";`,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
