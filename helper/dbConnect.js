const redis = require("redis");
const { CONNECTION_MODE, REDIS_HOST_URL,REDIS_HOST_PORT ,REDIS_HOST_PASSWORD,REDIS_PREFIX_KEY} = JSON.parse(process.env.REDIS);
const { promisifyAll } = require("bluebird");
let redisClientObj;
let client ;
module.exports.getRedisConnection = () => {
  return new Promise((resolve, reject) => {
    if (redisClientObj) {
      resolve(redisClientObj);
      return;
    }

    //const client = promisifyAll(redis.createClient(REDIS_HOST_URL));
    if(CONNECTION_MODE == "LOCAL"){
       client = 
      promisifyAll(
        redis.createClient({
          host: REDIS_HOST_URL,
          port: REDIS_HOST_PORT
        }));
    }

    if(CONNECTION_MODE == "SERVER"){
     client = 
    promisifyAll(
      redis.createClient({
        host: REDIS_HOST_URL,
        port: REDIS_HOST_PORT,
        password: REDIS_HOST_PASSWORD,
      }));
    }

    client.on("connect", function () {
      console.log("Redis client connected");
    });

    client.on("error", function (err) {
      console.log("Something went wrong " + err);
      reject(err);
    });

    client.on("ready", function () {
      console.log("is ready");
      redisClientObj = client;
      resolve(redisClientObj);
    });
  });
};

// {
//   host: "redis://127.0.0.1",
//   port: 6379,
//   password: "mypassword#c$blx!Na",
// }