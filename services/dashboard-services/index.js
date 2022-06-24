import axios from "axios";

function latestVideoPerformance() {
    return new Promise((resolve, reject) => {
      axios
        .get("/video/latest")
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

function mostViewedVideo(){
    return new Promise((resolve,reject)=>{
        axios
            .get('/video/most')
            .then((res)=>resolve(res))
            .catch((err)=>{
                if(err && err.response){
                    reject(err.message);
                }
            });
    })
}
function last30Views(){
    return new Promise((resolve,reject)=>{
        axios
            .get(video/thirtyviews)
            .then((res)=>resolve(res))
            .catch((err)=>{
                if(err && err.response){
                    reject(err.message);
                }
            });
    })
}
function last30Likes(){}
function last30Subscribe(){}

export {latestVideoPerformance,mostViewedVideo,last30Views,last30Likes,last30Subscribe};