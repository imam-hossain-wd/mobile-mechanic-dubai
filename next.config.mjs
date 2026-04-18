// /** @type {import('next').NextConfig} */
// const nextConfig = {

//   eslint: {
//     ignoreDuringBuilds: true,
//     ignoreBuildErrors: true,
//   },
//   images: {
//     domains: [
//       'img.freepik.com',
//       'i.ibb.co',
//       'res.cloudinary.com',
//       '/www.freepik.com'
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'img.freepik.com',
      'i.ibb.co',
      'res.cloudinary.com',
      'www.freepik.com' 
    ],
  },
 
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
