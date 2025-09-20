const nextConfig = {
    output: "export", 
    trailingSlash: true,  
    images: {
      unoptimized: true, 
    },
    experimental: {
      allowedDevOrigins: ['*'],
    },
  };
  
  export default nextConfig;