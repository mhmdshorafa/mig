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
const newDB = require('./connection');

module.exports = () => {
  return new Promise((resolve, reject) => {
    // Message_type.build({
    //   id: 1,
    //   type: 'text',
    // }).save()
    // Message_type.build({
    //   id: 2,
    //   type: 'audio',
    // }).save()
    // Message_type.build({
    //   id: 3,
    //   type: 'video',
    // }).save()
    // oldDB.query('select * from sn_user', {
    //   type: oldDB.QueryTypes.SELECT
    // }).then((users) => {
    //   const promises = users.map((user) => {
    //     return Users.build({
    //       id: user.id,
    //       profile_id: user.profile_id,
    //       username: user.username,
    //       username_canonical: user.username_canonical,
    //       email: user.email,
    //       email_canonical: user.email_canonical,
    //       enabled: user.enabled,
    //       salt: user.salt,
    //       password: user.password,
    //       last_login: user.last_login,
    //       confirmation_token: user.confirmation_token,
    //       password_requested_at: user.password_requested_at,
    //       roles: user.roles,
    //       facebookid: user.facebookid,
    //       googleid: user.googleid,
    //       linkedinid: user.linkedinid,
    //       firstname: user.firstname,
    //       lastname: user.lastname,
    //       tokenversion: user.tokenversion,
    //       dob: user.dob,
    //       gender: user.gender,
    //       invitationcode: user.invitationcode,
    //       createdfromip: user.createdfromip,
    //       locked: user.locked,
    //       expired: user.expired,
    //       expires_at: user.expires_at,
    //       credentials_expired: user.credentials_expired,
    //       credentials_expire_at: user.credentials_expire_at,
    //       createdAt: user.createdat
    //     }).save()
    //     })
        // Promise.all(promises).then((values) => {
        //   oldDB.query('select * from privatemessagethread', {
        //     type: oldDB.QueryTypes.SELECT
        //   }).then((rooms) => {
        //     const p2 = rooms.map((room) => {
        //       return Rooms.build({
        //         id: room.id,
        //         user_id: room.createdby_id,
        //         isspam: room.isspam,
        //         subject: room.subject,
        //         last_message: room.subject,
        //         last_message_date: room.updated_at,
        //         createdAt: room.updated_at
        //       }).save()
        //     })

            // Promise.all(p2).then((e) => {
              oldDB.query('select * from privatemessage where id > 3600', {
                type: oldDB.QueryTypes.SELECT
              }).then((messages) => {
                const p3 = messages.map((message) => {
                  return Messages.build({
                    user_id: message.sender_id,
                    room_id: message.thread_id,
                    message: message.body,
                    createdAt: message.created_at,
                  }).save()
                })
                Promise.all(p3).then((e) => {
                  // oldDB.query('select * from privatemessagemetadata', {
                  //   type: oldDB.QueryTypes.SELECT
                  // }).then((messagesDetails) => {
                    console.log('private messages migrated successful');
                    // const p4 = messagesDetails.map((messagedetail) => {
                    //   return Message_properties.build({
                    //     user_id: messagedetail.participant_id,
                    //     message_id: messagedetail.message_id,
                    //     is_read: messagedetail.is_read,
                    //     is_deleted: messagedetail.body,
                    //     deleted_at: messagedetail.deleted_at
                    //   }).save()
                    // })

                    // Promise.all(p4).then((e) => {
                      // oldDB.query('select * from privatemessagethreadmetadata', {
                      //   type: oldDB.QueryTypes.SELECT
                      // }).then((roomsDetails) => {
                      //   const p5 = roomsDetails.map((roomDetails) => {
                      //     return Participants.build({
                      //       id: roomDetails.id,
                      //       user_id: roomDetails.participant_id,
                      //       room_id: roomDetails.thread_id,
                      //       is_deleted: roomDetails.is_deleted,
                      //       deleted_at: roomDetails.deleted_at
                      //     }).save().then(() => {
                      //       Rooms.update(
                      //         { last_message_date: roomDetails.last_message_date },
                      //         { where: { id: roomDetails.thread_id } })
                      //     })
                      //   })
                      //
                      //   Promise.all(p5).then(() => {
                      //     oldDB.close();
                      //     newDB.close();
                      //     console.log('migrated successfullys');
                      //   })
                      // })
                //     })
                //   })
                // })
              // })
            // })
          }).catch((err) => {
            console.log(err);
          })
        // })
    //   }).catch((err) => {
    //   console.log('some error happend', err);
    //   reject(err);
    // });
  });
});
}
