import axios from "axios";

function getAccessToken() {
  return window.localStorage.getItem("jwt_access_token");
}

function register(body) {
  return new Promise((resolve, reject) => {
    axios
      .post("/auth/register", body)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (err && err.response) {
          reject(err.message);
        }
      });
  });
}

function login(body) {
  return new Promise((resolve, reject) => {
    axios
      .post("/auth/login", body)
      .then((res) => {
        setSession(res.data.token);
        resolve(res);
      })
      .catch((err) => {
        if (err && err.response) {
          reject(err.response?.data);
        }
      });
  });
}

function logout() {
  setSession();
}

function setSession(access_token) {
  if (access_token) {
    localStorage.setItem("jwt_access_token", access_token);
    axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
  } else {
    localStorage.removeItem("jwt_access_token");
    delete axios.defaults.headers.common.Authorization;
    window.location.reload();
  }
}

function loginWithToken(token) {
  return new Promise((resolve, reject) => {
      axios
          .get("/auth/getUserFromToken", {
              headers: {
                  Authorization: token,
              },
          })
          .then((res) => {
              setSession(token);
              resolve(res);
          })
          .catch((err) => {
              if (err && err.response) {
                  reject(err.response?.data);
              }
          });
  });
}

export { register, login, logout, loginWithToken, getAccessToken };
