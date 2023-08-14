// async function getUsers(){}

// const getUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   console.log(users);
// };

// getUsers();

// const getComments = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/comments");
//   const comments = await response.json();

//   const first = comments.filter((comment) => comment.id < 51);
//   const second = comments.filter(
//     (comment) => comment.id < 50 && comment.id > 101
//   );
//   const third = comments.filter(
//     (comment) => comment.id > 100 && comment.id < 151
//   );
//   const forth = comments.filter(
//     (comment) => comment.id > 150 && comment.id < 200
//   );
//   const fifth = comments.filter(
//     (comment) => comment.id > 200 && comment.id < 251
//   );
//   const sixth = comments.filter(
//     (comment) => comment.id > 250 && comment.id < 301
//   );
//   const seventh = comments.filter(
//     (comment) => comment.id > 300 && comment.id < 351
//   );
//   const eight = comments.filter(
//     (comment) => comment.id > 350 && comment.id < 400
//   );
//   const ninth = comments.filter(
//     (comment) => comment.id > 400 && comment.id < 451
//   );
//   const tenth = comments.filter(
//     (comment) => comment.id > 400 && comment.id < 451
//   );
//   const firstOne = first.find((el) => el.id === Math.random() * 50) + 1;
//   const secondOne = first.find((el) => el.id === Math.random() * 50) + 51;

//   console.log(find);
// };

// getComments();

const getPosts = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const posts = await response.json();

  const getRandomPosts = posts.filteredPosts((el) => el.id > 30 && el.id < 71);
  id = getRandomPosts;
  const filteredPosts = console.log(posts);
};

getPosts();
