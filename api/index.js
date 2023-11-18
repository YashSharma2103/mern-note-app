import { log } from 'console';
import express from 'express';

const app=express();

app.listen(3000,()=>{
  log("server running on 3000");
})