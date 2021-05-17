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
    alertDuration: faker.random.number(),
    // groupMember: new Array(groupMemberNum).fill().map((v, i) => ({
    //   name: faker.name.findName(),
    //   email: faker.internet.email(),
    // })),
    groupMember: [
      { name: "박진호", email: "gogod23@ajou.ac.kr" },
      { name: "양세영", email: "whfh1359@ajou.ac.kr" },
      { name: "한창희", email: "chang233@ajou.ac.kr" },
      { name: "김지훈", email: "alahoon1@ajou.ac.kr" },
    ],
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
    attendanceRate: faker.datatype.number({
      min: 1,
      max: 100,
    }),
    concentrationRate: faker.datatype.number({
      min: 1,
      max: 100,
    }),
    drowsinessRate: faker.datatype.number({
      min: 1,
      max: 100,
    }),
  };
};

export const createGuestRecentTrends = () => {
  return {
    role: "guest",
    attendanceRate: faker.datatype.number({
      min: 1,
      max: 100,
    }),
    concentrationRate: faker.datatype.number({
      min: 1,
      max: 100,
    }),
    drowsinessRate: faker.datatype.number({
      min: 1,
      max: 100,
    }),
  };
};

export const createHistoryList = () => {
  return new Array(20).fill().map((v, i) => ({
    id: shortId.generate(),
    groupName: faker.lorem.word(),
    createdAt: faker.date.past(2),
    attendance: faker.datatype.number({
      min: 1,
      max: 100,
    }),
    vibe: faker.datatype.number({
      min: 1,
      max: 100,
    }),
  }));
};

export const createGuestHistoryDetail = () => {
  return {};
};

export const createHostHistoryDetail = () => {
  return {};
};
