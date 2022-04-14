import axios from "axios";

const url = "https://6256d2426ea70370054001bc.mockapi.io/api/";

// request POST la users
const addUser = (user) => {
  const data = axios
    .post(url + "users", {
      username: user.username,
      password: user.password,
      role: user.role,
    })
    .then((response) => response.data);

  return data;
};

// request POST la news
const addArticle = (article) => {
  const data = axios
    .post(url + "news", {
      title: article.title,
      content: article.content,
      tags: article.tags
    })
    .then((response) => response.data);

  return data;
};

// request PUT la news/id
const updateArticleTags = (id, tags) => {
  const data = axios
    .put(url + `news/${id}`, {
      tags,
    })
    .then((response) => response.data);

  return data;
};

// request POST la login, se intoarce user-ul
// se cauta username-ul intors intr-un request de tip GET
// la /users si se returneaza userId-ul in caz de match

// prima functie returneaza o promisiune cu user-ul cautat
const loginUserData = (user) => {
  const postData = axios
    .post(url + "login", {
      username: user.username,
      password: user.password,
    })
    .then((response) => response.data);

  return postData;
};

export { loginUserData, addUser, addArticle, updateArticleTags };
