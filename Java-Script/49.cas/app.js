// async function getUsers(){}

// const getUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   console.log(users);
// };

// getUsers();

const getComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await response.json();
  const firstArr = comments.filter((el) => el.id < 51);
  const secondArr = comments.filter((el) => el.id > 51 && el.id < 100);
  const thirdArr = comments.filter((el) => el.id > 101 && el.id < 151);
  const forthArr = comments.filter((el) => el.id > 150 && el.id < 201);
  const fifthArr = comments.filter((el) => el.id > 200 && el.id < 251);
  const sixthArr = comments.filter((el) => el.id > 250 && el.id < 301);
  const seventhArr = comments.filter((el) => el.id > 300 && el.id < 351);
  const eigthArr = comments.filter((el) => el.id > 350 && el.id < 401);
  const ninethArr = comments.filter((el) => el.id > 400 && el.id < 451);
  const tenthArr = comments.filter((el) => el.id > 450 && el.id < 501);

  const firstRandomComment = firstArr.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 1
  );
  const secondRandomComment = firstArr.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 51
  );
  const thirdRandomComment = firstArr.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 101
  );
  const forthRandomComment = firstArr.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 151
  );
  const fifthRandomComment = firstArr.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 201
  );
  const sixthRandomComment = firstArr.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 251
  );
  const seventhRandomComment = firstArr.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 301
  );
  const eightRandomComment = firstArr.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 351
  );
  const ninthRandomComment = firstArr.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 401
  );
  const tenthRandomComment = firstArr.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 451
  );
  console.log(firstRandomComment);
  console.log(secondRandomComment);
  console.log(thirdRandomComment);
  console.log(forthRandomComment);
  console.log(fifthRandomComment);
  console.log(sixthRandomComment);
  console.log(seventhRandomComment);
  console.log(eightRandomComment);
  console.log(ninthRandomComment);
  console.log(tenthRandomComment);
};

getComments();

// const getPosts = async (id) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );
//   const posts = await response.json();
// };

// getPosts(Math.random() * 30);
