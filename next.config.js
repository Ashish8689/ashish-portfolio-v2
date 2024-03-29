/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    env: {
        GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    },
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
}

module.exports = nextConfig
