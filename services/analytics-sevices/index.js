import axios from "axios";

function channelViews() {
    return new Promise((resolve, reject) => {
      axios
        .get("/video/views")
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

function channelLikes() {
    return new Promise((resolve, reject) => {
      axios
        .get("/video/likes")
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

function channelSubscribers() {
    return new Promise((resolve, reject) => {
      axios
        .get("/subscribe/totalSubscribers" )
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

export {channelViews,channelLikes,channelSubscribers}