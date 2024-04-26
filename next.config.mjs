import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PORT: process.env.PORT
    },
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "istanbulcicekleri.com",
                port: "",
                pathname: "/!**",
            },
            {
                protocol: "https",
                hostname: "secretblooms.com.au/",
                port: "",
                pathname: "/!**",
            },
            {
                protocol: "https",
                hostname: "tailwindui.com",
                port: "",
                pathname: "/img/!**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/!**",
            },
        ],
    },
};

export default withNextIntl(nextConfig);