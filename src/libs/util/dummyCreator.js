import shortId from "shortid";
import faker from "faker";

export const createUser = () => {
  return {
    name: faker.name.findName(),
    profileImage: faker.image.image(),
    email: faker.internet.email(),
    token: faker.random.word(),
    id: shortId.generate(),
  };
};

export const hostGroupData = (groupMemberNum, waitingMemberNum) => {
  return {
    role: "host",
    hostName: faker.name.findName(),
    groupCode: shortId.generate(),
    groupName: faker.lorem.word(),
    absenceTime: faker.random.number(),
    alertduration: faker.random.number(),
    groupMember: new Array(groupMemberNum).fill().map((v, i) => ({
      name: faker.name.findName(),
      email: faker.internet.email(),
    })),
    waitingMember: new Array(waitingMemberNum).fill().map((v, i) => ({
      name: faker.name.findName(),
      email: faker.internet.email(),
    })),
  };
};

export const guestGroupData = () => {
  return {
    role: "guest",
    hostName: faker.name.findName(),
    groupCode: shortId.generate(),
    groupName: faker.lorem.word(),
    absenceTime: faker.datatype.number(),
    alertDuration: faker.datatype.number(),
  };
};

export const groupList = (number) => {
  return Array(number)
    .fill()
    .map((v, i) => ({
      id: shortId.generate(),
      groupName: faker.random.word(),
      groupCode: faker.datatype.number(),
      status: i % 2 === 0 ? true : false,
      role: i % 2 === 0 ? "HOST" : "GUEST",
    }));
};

export const waitingList = (number) => {
  return Array(number)
    .fill()
    .map((v, i) => ({
      groupName: faker.random.word(),
      groupCode: faker.datatype.number(),
      status: "wait",
    }));
};

export const createHostRecentTrends = () => {
  return {
    role: "host",
    attendanceRate: parseInt(faker.datatype.number() / 100 - 30),
    concentrationRate: parseInt(faker.datatype.number() / 100 - 30),
    drowsinessRate: parseInt(faker.datatype.number() / 100 - 30),
  };
};

export const createGuestRecentTrends = () => {
  return {
    role: "guest",
    attendanceRate: parseInt(faker.datatype.number() / 100 - 30),
    concentrationRate: parseInt(faker.datatype.number() / 100 - 30),
    drowsinessRate: parseInt(faker.datatype.number() / 100 - 30),
  };
};
