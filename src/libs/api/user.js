import client from "./client";

export const setUser = () => client.get("");

export const login = ({ email, password }) =>
  client.post(`/api/auth/login`, { email, password });

export const register = () => client.post(`/api/auth/register`);

export const logout = () => client.get(`/api/auth/logout`);
