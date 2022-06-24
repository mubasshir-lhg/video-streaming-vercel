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

export {latestVideoPerformance,mostViewedVideo};