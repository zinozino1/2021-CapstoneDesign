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

export const rejectMember = ({ userEmail, groupId }) =>
  client.post(`/api/group/rejectMember/${groupId}`, { email: userEmail });

export const loadHistoryList = (userId) =>
  client.get(`/api/history/getHistory?userId=${userId}`);

export const loadGuestRecentTrends = (userId) =>
  client.get(`/api/main/getGuestRecentTrends/${userId}`);

export const loadHostRecentTrends = (userId) =>
  client.get(`/api/main/getHostRecentTrends/${userId}`);
