// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   redirects: async() => [
//     {
//       source: '/inicio',
//       destination: '/',
//       permanent: false
//     }
//   ]
// };

// export default nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/inicio',
        permanent: true
      }
    ]
  }
}