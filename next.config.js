/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    // Ensure assets work when deployed to any hosting environment
    basePath: '',
    trailingSlash: true,
}

module.exports = nextConfig
