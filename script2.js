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

function getColdDrinks() {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous task of getting cold drinks
    setTimeout(() => {
      resolve("Cold drinks");
    }, 2000);
  });
}

async function runAsync() {
  try {
    const user = {
      name: "John",
      lastActivityTime: null,
      posts: []
    };

    const post = {
      id: 1,
      content: "This is a sample post."
    };

    const createdPost = await createPost(post);
    user.posts.push(createdPost);

    const lastActivityTime = await updateLastUserActivityTime(user);
    console.log("Posts:", user.posts);
    console.log("Last Activity Time:", lastActivityTime);

    const deletedPost = await deletePost(user.posts[user.posts.length - 1]);
    user.posts.pop();
    console.log("New Posts:", user.posts);

    const coldDrinks = await getColdDrinks();
    console.log("Got:", coldDrinks);
  } catch (error) {
    console.error("Error:", error);
  }
}

runAsync();
