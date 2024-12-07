
import ImageKit from "imagekit-javascript";

const imagekit = new ImageKit({
  publicKey: "https://upload.imagekit.io/api/v1/files/upload", // ImageKit’dan olingan API kalit
  urlEndpoint: "https://ik.imagekit.io/njtthrpue", // Endpoint URL
//   authenticationEndpoint: "http://localhost:3000/auth" // Agar fayl yuklash uchun autentifikatsiya qilish kerak bo‘lsa
});

export default imagekit;
