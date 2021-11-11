const { getConnection } = require("../helper/dbConnect");

module.exports = async function getKey(key) {
  const redis = await getConnection();
  return new Promise((resolve, reject) => {
    redis.get(key, (err, res) => {
      if (err) reject(err);
      resolve(JSON.parse(res));
    });
  });
};
