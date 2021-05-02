import shortId from "shortid";
import faker from "faker";

export const hostGroupData = (groupMemberNum, waitingMemberNum) => {
  return {
    person: "host",
    groupCode: shortId.generate(),
    groupName: faker.lorem.word(),
    absenceTime: faker.random.number(),
    groupCreatedAt: faker.date.recent(),
    alertTime: faker.random.number(),
    groupMember: new Array(groupMemberNum).fill().map((v, i) => ({
      name: faker.name.findName(),
      email: faker.random.word(),
    })),
    waitingMember: new Array(waitingMemberNum).fill().map((v, i) => ({
      name: faker.name.findName(),
      email: faker.random.word(),
    })),
  };
};

export const guestGroupData = () => {
  return {
    person: "guest",
    groupCode: shortId.generate(),
    groupName: faker.lorem.word(),
    absenceTime: faker.random.number(),
    groupCreatedAt: faker.date.recent(),
    alertTime: faker.random.number(),
  };
};

export const groupList = (number) => {
  return Array(number)
    .fill()
    .map((v, i) => ({
      id: shortId.generate(),
      classRoomName: faker.lorem.word(),
      classRoomCode: faker.random.number(),
      status: i % 2 === 0 ? "OFF" : "ON",
      role: i % 2 === 0 ? "HOST" : "GUEST",
    }));
};

export const waitingList = (number) => {
  return Array(number)
    .fill()
    .map((v, i) => ({
      classRoomName: faker.lorem.word(),
      classRoomCode: faker.random.number(),
      status: i % 2 === 0 ? "OFF" : "ON",
      role: i % 2 === 0 ? "HOST" : "GUEST",
    }));
};
