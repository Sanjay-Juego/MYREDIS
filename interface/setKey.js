const { getConnection } = require("../helper/dbConnect");
const { REDIS_PREFIX_KEY } = JSON.parse(process.env.REDIS);
module.exports = async function setKey(key, value) {
  const redis = await getConnection();
  key = REDIS_PREFIX_KEY + key;
  return new Promise((resolve, reject) => {
    redis.set(key, value, (err, res) => {
      if (err) reject(err);
      resolve(true);
    });
  });
};
