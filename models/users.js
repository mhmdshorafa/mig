const sequelize = require('../connection');
const Sequelize = require('sequelize');

module.exports = sequelize.define('users', {
  profile_id: { type: Sequelize.INTEGER },
  username: { type: Sequelize.STRING },
  username_canonical: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  email_canonical: { type: Sequelize.STRING },
  enabled: { type: Sequelize.BOOLEAN },
  salt: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  last_login: { type: Sequelize.DATE },
  confirmation_token: { type: Sequelize.STRING },
  password_requested_at: { type: Sequelize.DATE },
  roles: { type: Sequelize.STRING },
  facebookid: { type: Sequelize.STRING },
  googleid: { type: Sequelize.STRING },
  linkedinid: { type: Sequelize.STRING },
  firstname: { type: Sequelize.STRING },
  lastname: { type: Sequelize.STRING },
  tokenversion: { type: Sequelize.STRING },
  dob: { type: Sequelize.DATE },
  gender: { type: Sequelize.STRING },
  invitationcode: { type: Sequelize.STRING },
  createdfromip: { type: Sequelize.STRING },
  locked: { type: Sequelize.BOOLEAN },
  expired: { type: Sequelize.BOOLEAN },
  expires_at: { type: Sequelize.DATE },
  credentials_expired: { type: Sequelize.BOOLEAN },
  credentials_expire_at: { type: Sequelize.DATE },
  createdAt: { type: Sequelize.DATE }
});
