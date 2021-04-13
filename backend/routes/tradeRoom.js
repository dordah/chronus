require("dotenv").config();
const express = require("express");
const router = express.Router();
const Users = require("./models/auth_users");
const ChatLists = require("./models/ChatLists");
const Supplies = require("./models/Supplies");
const Ratings = require("./models/Ratings");

router.get("/", async (_req, res, next) => {
  const allUsers = await userAllData();
  const allUsersInfof = await allUsersInfo();

  const usersWithChatList = allUsers.users.map((user) => ({
    ...user,
    chat_list: idToEmail(allUsers.users, user.chat_list),
  }));

  const concatUsers = allUsersInfof.map((user) => {
    const chat = usersWithChatList.filter((chat) => chat.id == user.userid);
    const chatList = chat[0].chat_list;
    const rating = allUsers.ratings.filter(
      (rating) => rating.on_id == user.userid
    );
    const finalRating = rating[0];
    let finalObj;
    finalObj =
      finalRating != undefined
        ? {
            ...user,
            chat_list: chatList,
            rate: finalRating.rate,
            text: finalRating.text,
          }
        : { ...user, chat_list: chatList };

    return finalObj;
  });

  res.json(concatUsers);
  res.sendStatus(200);
});

router.post("/chatlistbyemail", (req, res, next) => {
  chatListByEmail()
    .then((chatList) => {
      const users = chatList.users.map((user) => user.dataValues);
      const chatLists = chatList.chat_lists.map(
        (chatList) => chatList.dataValues
      );
      const user = users.filter((user) => user.email == req.body.email)[0];
      const userChatList = chatLists.filter(
        (chatList) => chatList.id == user.id
      )[0];
      const finalObject = {
        user_id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        chat_list: userChatList.chat_list,
      };

      console.log(userChatList);
    })
    .catch((err) => console.log(err));
});

router.get("/chatlists", (req, res, next) =>
  chatListUsers()
    .then((chatLists) => {
      console.log(chatLists);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

const allUsersInfo = async () => {
  //npm run dev
  const users = await Users.findAll();
  const usersRecord = users.map((user) => user.dataValues);
  const supplies = await Supplies.findAll();
  const suppliesRecord = supplies.map((supply) => supply.dataValues);
  const records = usersRecord.map((user) => {
    const supplyOfUser = suppliesRecord.filter(
      (supply) => supply.id == user.id
    )[0];
    return Object({
      userid: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
      profession: supplyOfUser.profession,
      description_card: supplyOfUser.description_card,
      description_profession: supplyOfUser.description_profession,
    });
  });

  return records;
  //   7) rating_int (give me a average of all the given ratings to the specific users) - null - if there is no rating
  //   8) rating_text (give me the last two rating of this users {rating1: "", rating2: ""})
  //   9) Chat List -
};

const chatListUsers = async () => {
  const chatLists = await ChatLists.findAll();
  return chatLists;
};

const chatListByEmail = async () => {
  const allUsers = await Users.findAll();
  const chatLists = await ChatLists.findAll();
  const finalObject = {
    users: allUsers,
    chat_lists: chatLists,
  };
  return finalObject;
};

const userAllData = async () => {
  const chatLists = await ChatLists.findAll();
  const chatListsRecords = chatLists.map((chatList) => chatList.dataValues);
  const users = await Users.findAll();
  const usersRecords = users.map((user) => user.dataValues);
  const supplies = await Supplies.findAll();
  const suppliesRecords = supplies.map((supply) => supply.dataValues);
  const ratings = await Ratings.findAll();
  const ratingsRecords = ratings.map((rating) => rating.dataValues);
  const allRecordsObject = {
    users: usersRecords,
    supplies: suppliesRecords,
    ratings: ratingsRecords,
    chat_list: chatListsRecords,
  };
  return allRecordsObject;
};

const idToEmail = (users, ids) => {
  // console.log(`users = ${users} the type is ${typeof users}`);
  // console.log(`ids = ${ids} the type is ${typeof ids}`);
  const arrayOfUsers = Object.values(users);

  const usersFromUsers = arrayOfUsers.filter((user) => ids.includes(user.id));
  const arrayOfUsersRecords = [];
  usersFromUsers.map((user) =>
    arrayOfUsersRecords.push({
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    })
  );

  return arrayOfUsersRecords;
};

module.exports = router;
