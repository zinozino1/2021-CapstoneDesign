import shortId from "shortid";
import faker from "faker";

/**
 * @author 박진호
 * @version 1.0
 * @summary 더미데이터 생성 유틸 함수 라이브러리
 */

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
    // list
    role: i % 2 === 0 ? "guest" : "host",
    historyId: shortId.generate(),
    groupName: faker.lorem.word(),
    createdAt: faker.date.past(2),
    attendanceCount: faker.datatype.number({
      min: 1,
      max: 100,
    }),
    vibe: faker.datatype.number({
      min: 1,
      max: 100,
    }),
    // list item - guest
    isAttend: faker.datatype.boolean(),
    timeLineLog: new Array(10).fill().map((v, i) => ({
      state: "absence",
      startHour: faker.datatype.number({
        min: 1,
        max: 10,
      }),
      startMinute: faker.datatype.number({
        min: 0,
        max: 59,
      }),
      startSeconds: faker.datatype.number({
        min: 0,
        max: 59,
      }),
      endHour: faker.datatype.number({
        min: 1,
        max: 10,
      }),
      endMinute: faker.datatype.number({
        min: 0,
        max: 59,
      }),
      endSeconds: faker.datatype.number({
        min: 0,
        max: 59,
      }),
    })),
    roll: {
      left: faker.datatype.number({
        min: 1,
        max: 100,
      }),
      normal: faker.datatype.number({
        min: 1,
        max: 100,
      }),
      right: faker.datatype.number({
        min: 1,
        max: 100,
      }),
    },
    yaw: {
      left: faker.datatype.number({
        min: 1,
        max: 100,
      }),
      normal: faker.datatype.number({
        min: 1,
        max: 100,
      }),
      right: faker.datatype.number({
        min: 1,
        max: 100,
      }),
    },
    // list item - host

    groupMember: new Array(30).fill().map((v, i) => ({
      name: faker.name.findName(),
      email: faker.internet.email(),
      attitude: faker.datatype.number({
        min: 1,
        max: 3,
      }),
      absenceTime: faker.datatype.number({
        min: 1,
        max: 60,
      }),
      isAttend: faker.datatype.boolean(),
    })),
  }));
};

// deprecated
export const createGuestHistoryDetail = () => {
  return {};
};

// deprecated
export const createHostHistoryDetail = () => {
  return {};
};
