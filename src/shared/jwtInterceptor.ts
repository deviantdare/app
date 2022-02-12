import axios from "axios";
import store from "../store/index";

const jwtInterceptor = axios.create({});

jwtInterceptor.interceptors.request.use((config: any) => {
  const authData = store.getters["auth/getAuthData"];
  if (authData == null) {
    return config;
  }
  config.headers.common["Authorization"] = `Bearer ${authData.access_token}`;
  return config;
});

jwtInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const authData = store.getters["auth/getAuthData"];
      const payload = {
        access_token: authData.access_token,
        refresh_token: authData.refresh_token,
      };
      const response = await axios.post(
        "http://localhost:3000/auth/refresh_token",
        payload
      );
      await store.dispatch("auth/saveTokensToStorage", response.data);
      error.config.headers["Authorization"] = `Bearer ${response.data.access_token}`;
      return axios(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default jwtInterceptor;
