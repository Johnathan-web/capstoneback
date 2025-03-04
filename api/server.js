const express = require('express');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();


app.use(express.json());
const verifyToken = (req, res, next) => {
    if(req.method === 'OPTIONS') {
      return next(); 
    }
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      console.log('No authorization header');
      return res.status(403).send({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      console.log('Token is missing after "Bearer"');
      return res.status(403).send({ message: 'No token provided' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log('JWT verification failed:', err.message);
        return res.status(401).send({ message: 'Unauthorized' });
      }
    
      console.log('Token verified, user id is:', decoded.id, decoded.username );
      req.userId = decoded.id; 
      next();  
    });
  };

app.post('/api/v1/login', async(req, res, next) => {
    const { username, password} = req.body;
    try{
        const user = await prisma.user.findUnique({
            where: {username}
        });
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(400).json('unauthorized');
        }
        const token = jwt.sign({userId: user.id, email: user.email}, SECRET_KEY,{
            expiresIn:"1h",
        });
        res.status(201).json(token);
    }catch(err){
        console.error(err);
    }
});

app.post('/api/v1/register', async(req, res, next) => {
    const {username, email, firstName, password} = req.body;
    try{
        const register = await prisma.user.create({
            data: {username, email, name: firstName, password: await bcrypt.hash(password, 5)}
        });
        if(!register){
            return res.status(400).json('couldnt create the user');
        }
        res.status(201).json(register);
    }catch(err){
        console.error(err);
    }
});
app.get('/api/v1/Games',verifyToken, async(req, res, next) => {
    
   try {
    const Games = await prisma.order.findMany({
        where:{userId:req.userId}
    })
    res.json(Games)
   } catch (error) {
    
   }
});


app.listen(3000, ()=>{
    console.log('listening on port 3000');
})