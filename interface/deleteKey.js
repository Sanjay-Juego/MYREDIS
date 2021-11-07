const { getRedisConnection } = require("../helper/dbConnect");

module.exports = async function deleteKey(key) {
  const redis = await getRedisConnection();
  return new Promise((resolve, reject) => {
    redis.del(key, (err, res) => {
      if (err) reject(err);
      resolve(true);
    });
  });
};
