const redis = require("redis");
const { REDIS_HOST_URL, REDIS_HOST_PORT, REDIS_HOST_PASSWORD } = JSON.parse(
  process.env.REDIS
);
const { promisifyAll } = require("bluebird");
let redisClientObj;
let client;
module.exports.getConnection = () => {
  return new Promise((resolve, reject) => {
    if (redisClientObj) {
      resolve(redisClientObj);
      return;
    }

    //const client = promisifyAll(redis.createClient(REDIS_HOST_URL));
    if (REDIS_HOST_PASSWORD == "") {
      client = promisifyAll(
        redis.createClient({
          host: REDIS_HOST_URL,
          port: REDIS_HOST_PORT,
        })
      );
    } else {
      client = promisifyAll(
        redis.createClient({
          host: REDIS_HOST_URL,
          port: REDIS_HOST_PORT,
          password: REDIS_HOST_PASSWORD,
        })
      );
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
