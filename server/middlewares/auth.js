const {User} = require('./../models/db');

const authMiddleware = async (req, res, next) => {
  try {
    const { uid } = req.session;
    const user = await User.findOne({ _id: uid });
    if (!user) throw new Error();
    req.user = user;

    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

module.exports = authMiddleware;
