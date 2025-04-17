/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Esto indica que Next debe exportar como sitio estático
    images: {
      unoptimized: true, // Necesario si usas el componente <Image /> de Next
    },
  };
  
  export default nextConfig;
  