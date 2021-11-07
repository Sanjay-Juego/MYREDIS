const  {getRedisConnection } = require("../helper/dbConnect");

module.exports = async function setKey(key, value) {
  const redis = await getRedisConnection();
  return new Promise((resolve, reject) => {
    redis.set(key, value, (err, res) => {
      if (err) reject(err);
      resolve(true);
    });
  });
};
