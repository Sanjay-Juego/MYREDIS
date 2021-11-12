const { getConnection } = require("../helper/dbConnect");
const {REDIS_PREFIX_KEY} = JSON.parse(process.env.REDIS); 
module.exports = async function deleteKey(key) {
  const redis = await getConnection();
  key = REDIS_PREFIX_KEY + key;
  return new Promise((resolve, reject) => {
    redis.del(key, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};
