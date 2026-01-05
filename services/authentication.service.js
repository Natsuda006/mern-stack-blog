import api from "./api";
const API_URL = import.meta.env.VITE_AUTH_URL;
import TokenServices from "./token.service";

const register = async (username, password) => {
  return await api.post(API_URL + "/register", { username, password });
};

const login = async (username, password) => {
  const response = await api.post(API_URL + "/login", { username, password });
  const { status, data } = response;
  if (status === 200) {
    if (data?.accessToken) {
      TokenServices.setUser(data);
    }
  }
  return response;
};

const logout = () => {
  TokenServices.removeUser();
};

const AuthenticationService = {
  register,
  login,
  logout,
};
export default AuthenticationService;