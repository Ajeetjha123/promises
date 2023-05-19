function createPost(post) {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous creation of a post
    setTimeout(() => {
      resolve(post);
    }, 1000);
  });
}

function updateLastUserActivityTime(user) {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous update of lastActivityTime
    setTimeout(() => {
      user.lastActivityTime = new Date();
      resolve(user.lastActivityTime);
    }, 1000);
  });
}

function deletePost(post) {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous deletion of a post
    setTimeout(() => {
      resolve(post);
    }, 1000);
  });
}

// Example usage
const user = {
  name: "John",
  lastActivityTime: null,
  posts: []
};

const post = {
  id: 1,
  content: "This is a sample post."
};

createPost(post)
  .then((createdPost) => {
    user.posts.push(createdPost);
    return updateLastUserActivityTime(user);
  })
  .then((lastActivityTime) => {
    console.log("Posts:", user.posts);
    console.log("Last Activity Time:", lastActivityTime);
    return deletePost(user.posts[user.posts.length - 1]);
  })
  .then((deletedPost) => {
    user.posts.pop();
    console.log("New Posts:", user.posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
