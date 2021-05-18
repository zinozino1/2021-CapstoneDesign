import client from "./client";

export const loadPost = (id) => client.get("");

export const loadGroupList = (id) => client.get(`/api/main/getGroupList/${id}`);

export const loadWaitingList = (id) =>
  client.get(`/api/main/getWaitingList/${id}`);

// axios 로 대체
export const joinGroup = (id) => client.post(`/api/group/joinGroup/${id}`);
