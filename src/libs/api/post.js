import client from "./client";

export const loadPost = (id) => client.get("");

export const loadGroupList = (id) => client.get(`/api/main/getGroupList/${id}`);
