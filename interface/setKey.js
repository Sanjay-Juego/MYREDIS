const  {getConnection } = require("../helper/dbConnect");

module.exports = async function setKey(key, value) {
  const redis = await getConnection();
  return new Promise((resolve, reject) => {
    redis.set(key, value, (err, res) => {
      if (err) reject(err);
      resolve(true);
    });
  });
};
