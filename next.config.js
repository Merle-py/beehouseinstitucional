/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    // Configure basePath for subdirectory deployment
    basePath: '/teste',
    trailingSlash: true,
}

module.exports = nextConfig
