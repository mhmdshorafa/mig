const sequelize = require('../connection');
const Users = require('./users');
const Rooms = require('./rooms');
const Participants = require('./participants');
const Messages = require('./messages');
const Message_type = require('./messages_type');
const Message_properties = require('./message_properties');
const Block = require('./block');

Rooms.belongsTo(Users, { foreignKey: 'user_id', targetKey: 'id' });

Participants.belongsTo(Users, { foreignKey: 'user_id', targetKey: 'id' });
Participants.belongsTo(Rooms, { foreignKey: 'room_id', targetKey: 'id' });

Messages.belongsTo(Users, { foreignKey: 'user_id', targetKey: 'id' });
Messages.belongsTo(Rooms, { foreignKey: 'room_id', targetKey: 'id' });
Messages.belongsTo(Message_type, { foreignKey: 'message_type_id', targetKey: 'id' });

Message_properties.belongsTo(Users, { foreignKey: 'user_id', targetKey: 'id' });
Message_properties.belongsTo(Messages, { foreignKey: 'message_id', targetKey: 'id' });

Block.belongsTo(Users, { foreignKey: 'from_user', targetKey: 'id' });
Block.belongsTo(Users, { foreignKey: 'to_user', targetKey: 'id' });

sequelize.sync().then(() => {
  console.log('tables created');
  require('../migrate')();
});


module.exports =
    {
      Users,
      Rooms,
      Participants,
      Messages,
      Message_type,
      Message_properties
    };
