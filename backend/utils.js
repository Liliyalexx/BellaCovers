import JWT from "jsonwebtoken";

export const generateToken = (user) => {
  return JWT.sign (
    {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  }, 
  process.env.JWT_SECRET || 'somethingsecret',  
  {
  expiresIn: '30d',
  }
);
};

export const isAuth = (req, res, next) => {
  const authorazation = req.headers.authorazation;
  if(authorazation){
  const token = authorazation.slice(7, authorazation.length); //Bearer XXXXXX }
  jwt.verify(
    token, 
    process.env.JWT_SECRET || 'somethingsecret', 
    (err, decode ) => {
    if (err) {
      res.status(401).send({ message: 'Invalid Token' });
    } else {
      req.user = decode;
      next();
    }
  }
  );
 } else {
  res.status(401).send({ message: 'No Token'});
}
};