import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  //baseURL: "http://127.0.0.1:5001/my--frontend/us-central1/api",
  // deployed version of firebase function
  baseURL: "https://api-e4i2phpdla-uc.a.run.app",

  // deployed version of amazon server on render.com
  // baseURL: "https://amazon-backend-api-ynh1.onrender.com",
});

export { axiosInstance };
