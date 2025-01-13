

/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = 'my-portfolio'; // Replace with your GitHub repository name

const nextConfig = {
    basePath: isGithubPages ? `/${repoName}` : '',
    assetPrefix: isGithubPages ? `/${repoName}/` : '',
    output: "export",
    distDir: "dist",
    iamges: {
        unoptimized: true
    }
};

export default nextConfig;
