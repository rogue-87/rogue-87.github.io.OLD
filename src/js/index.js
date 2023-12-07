import { pickSentence } from "./modules/sentences.mjs";
import { write } from "./modules/typewriter.mjs";

const field = document.getElementById("msg")


write(field, pickSentence(), 50);
setInterval(()=>{
  
  write(field, pickSentence(), 50)
}, 3000)
