import axios from "axios";

const BASE_URL = "https://apiserverkdb.herokuapp.com/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjk1ZGFjMzI1NTM2OGVkZTJlMzQ1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzY4MDYzNSwiZXhwIjoxNjYzOTM5ODM1fQ.u3dTK2lCGVqVfRFqixqdhgVqZw3CDT0jj6RV8Yx1M1U";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
