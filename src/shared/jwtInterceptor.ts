import axios from "axios";
import store from "../store/index";

const jwtInterceptor = axios.create({});

jwtInterceptor.interceptors.request.use((config: any) => {
  const authData = store.getters["auth/getAuthData"];
  if (authData == null) {
    return config;
  }
  config.headers.common["Authorization"] = `bearer ${authData.token}`;
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
        token: authData.token,
        refreshToken: authData.refreshToken,
      };
      const response = await axios.post(
        "http://localhost:3000/auth/refreshtoken",
        payload
      );
      await store.dispatch("auth/saveTokensToStorage", response.data);
      error.config.headers[
        "Authorization"
      ] = `bearer ${response.data.token}`;
      return axios(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default jwtInterceptor;
