import client from "./client";

export const loadPost = (id) => client.get("");

export const loadGroupList = (id) => client.get(`/api/main/getGroupList/${id}`);

export const loadWaitingList = (id) =>
  client.get(`/api/main/getWaitingList/${id}`);

// axios 로 대체
export const joinGroup = (id) => client.post(`/api/group/joinGroup/${id}`);

export const loadGroupInfo = ({ id, groupId, userId }) =>
  client.post(`/api/group/getGroupInfo`, { groupId, userId });

export const allowMember = ({ userEmail, groupId }) =>
  client.post(`/api/group/allowMember/${groupId}`, { email: userEmail });

export const rejectMember = (id, email) =>
  client.patch(`/api/group/rejectMember/${id}`, { email });
