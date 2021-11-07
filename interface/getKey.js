const { getRedisConnection } = require("../helper/dbConnect");

module.exports = async function getKey(key) {
  const redis = await getRedisConnection();
  return new Promise((resolve, reject) => {
    redis.get(key, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};
