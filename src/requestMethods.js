import axios from "axios";

//const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "https://apiserverkdb.herokuapp.com/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjlhM2QzZDM0MWY2MjU4Yzg5ZTMyOCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjQ3NzEyNDQsImV4cCI6MTY2NTAzMDQ0NH0.21R20Adp6z2cEl17cQzU0YZ8-jVVdaQZYkhovIgUDqg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
