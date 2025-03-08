const conf = {
    base_Url: String(import.meta.env.VITE_API_URL),
    is_PROD: JSON.parse(import.meta.env.VITE_IS_PROD.toLowerCase()), // Ensures a proper boolean
  };
  
  const server = conf.is_PROD ? "https://meet.onrender.com" : conf.base_Url;
  console.log(server);
  
  
  
  export default server;
  
  