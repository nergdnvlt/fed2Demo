const { posts } = require('./posts_data.json');

class PostsAPI {
  getAllPosts() {
    return posts;
  }

  getPost(id) {
    return posts.find(p => p.id === id);
  }
}

module.exports = PostsAPI;
