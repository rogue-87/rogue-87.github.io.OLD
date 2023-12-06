import { pickSentence } from "./modules/sentences.mjs";
import { write } from "./modules/typewriter.mjs";

const field = document.getElementById("terminal")

write(field, pickSentence(), 50)