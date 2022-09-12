let { users } = require('./users_data.json');

class UsersAPI {
  getAllUsers() {
    return users
  }
  
  getUser(id) {
    return users.find(u => u.id === id);
  }
}

module.exports = UsersAPI;
