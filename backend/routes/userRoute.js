import express from 'express';


const userRouter = express.Router();

userRouter.get('/seed', async (req, res)=>{
  try { 
    const user = new User({
      name: 'Liliya',
      email: 'liliya.fedyurina@gmail.com',
      password: '1234',
      isAdmin: true
      });

  const newUser = await user.save();
  res.send(newUser);
    } catch (error) { 
   
      res.send({msg: error.message});
    }
})
export default userRouter;