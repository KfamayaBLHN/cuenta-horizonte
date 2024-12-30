/** @type {import('next').NextConfig} */

let _assetPrefix = '/';
let _basePath = '';
let _publicBasePath = '';//es el path para las imagenes

// staging
if ( process.env.NODE_ENV !== 'development' ) {
  _assetPrefix = '/blh/banca-personal/cuenta-horizonte/';
  _basePath = '/blh/banca-personal/cuenta-horizonte';
  _publicBasePath = '/blh/banca-personal/cuenta-horizonte';//es el path para las imagenes
}

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  basePath: _basePath,
  trailingSlash: false,
  assetPrefix: _assetPrefix,
  publicRuntimeConfig: {
    basePath: _publicBasePath,
  }
}


export default nextConfig;
