/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/game-site", // リポジトリ名を指定
  assetPrefix: "/game-site/", // 静的アセットのパスを指定
  images: {
    unoptimized: true, // 必要に応じて画像最適化を無効化
  },
};

export default nextConfig;
