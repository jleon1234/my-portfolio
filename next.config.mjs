

/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = 'my-portfolio'; // Replace with your GitHub repository name

const nextConfig = {
    basePath: isGithubPages ? `/${repoName}` : '',
    assetPrefix: isGithubPages ? `/${repoName}/` : '',
    // output: "export",
    distDir: "dist",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'jleon1234.github.io',
              port: '',
              pathname: '/my-portfolio/**',
              search: '',
            },
          ],
    }
};

export default nextConfig;
