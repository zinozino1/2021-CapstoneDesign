import client from "./client";

/**
 * @author 박진호
 * @version 1.0
 * @summary 유저인증 관련 api 라이브러리
 */

export const setUser = () => client.get("");

export const login = ({ email, password }) =>
  client.post(`/api/auth/login`, { email, password });

export const register = () => client.post(`/api/auth/register`);

export const logout = () => client.get(`/api/auth/logout`);
