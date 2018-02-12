const Sequelize = require('sequelize');
require('dotenv').config();
const oldDatabaseConfig = process.env.OLD;

const { Users, Rooms, Messages, Message_properties, Participants, Message_type } = require('./models/index');
const oldDB = new Sequelize(oldDatabaseConfig, { dialect: 'postgres', pool: {
  max: 5,
  min: 0,
  idle: 100000,
  acquire: 100000
} });
require('./connection');


module.exports = () => {

  return new Promise((resolve, reject) => {
    oldDB.query('select * from sn_user', {
      type: oldDB.QueryTypes.SELECT
    }).then((users) => {
      const userSchema = users.map((user) => {
        return {
          id: user.id,
          profile_id: user.profile_id,
          username: user.username,
          username_canonical: user.username_canonical,
          email: user.email,
          email_canonical: user.email_canonical,
          enabled: user.enabled,
          salt: user.salt,
          password: user.password,
          last_login: user.last_login,
          confirmation_token: user.confirmation_token,
          password_requested_at: user.password_requested_at,
          roles: user.roles,
          facebookid: user.facebookid,
          googleid: user.googleid,
          linkedinid: user.linkedinid,
          firstname: user.firstname,
          lastname: user.lastname,
          tokenversion: user.tokenversion,
          dob: user.dob,
          gender: user.gender,
          invitationcode: user.invitationcode,
          createdfromip: user.createdfromip,
          locked: user.locked,
          expired: user.expired,
          expires_at: user.expires_at,
          credentials_expired: user.credentials_expired,
          credentials_expire_at: user.credentials_expire_at,
          createdAt: user.createdat
        };
      });
      Users.bulkCreate(userSchema).then(() => {
        // oldDB.query('select * from privatemessagethread', {
        //   type: oldDB.QueryTypes.SELECT
        // }).then((rooms) => {
        //   const roomSchema = rooms.map((room) => {
        //     return {
        //       id: room.id,
        //       user_id: room.createdby_id,
        //       isspam: room.isspam,
        //       subject: room.subject,
        //       last_message: room.subject,
        //       last_message_date: room.updated_at,
        //       createdAt: room.updated_at
        //     };
        //   });
        //   Rooms.bulkCreate(roomSchema).then(() => {
        //
        //     oldDB.query('select * from privatemessage', {
        //       type: oldDB.QueryTypes.SELECT
        //     }).then((messages) => {
        //       const messageSchema = messages.map((message) => {
        //         return { id: message.id,
        //           user_id: message.sender_id,
        //           room_id: message.thread_id,
        //           message: message.body,
        //           createdAt: message.created_at
        //         };
        //       });
        //       Messages.bulkCreate(messageSchema).then(() => {
        //         oldDB.query('select * from privatemessagemetadata', {
        //           type: oldDB.QueryTypes.SELECT
        //         }).then((messages_properties) => {
        //           const message_propertiesSchema = messages_properties.map((messages_propertie) => {
        //             return {
        //               id: messages_propertie.id,
        //               user_id: messages_propertie.participant_id,
        //               message_id: messages_propertie.message_id,
        //               is_read: messages_propertie.is_read,
        //               is_deleted: messages_propertie.body,
        //               deleted_at: messages_propertie.deleted_at
        //             };
        //           });
        //           Message_properties.bulkCreate(message_propertiesSchema).then(() => {
        //             console.log('migrated successfully');
        //           });
        //         });
        //       });
        //     });
        //   });
        // });
      });
    });
  });
};
