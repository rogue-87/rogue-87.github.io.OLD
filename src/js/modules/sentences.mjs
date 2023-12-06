const sentences = [
  ">Programmer_",
  ">Artist(sometimes)_",
  ">Gamer_"
];

export function pickSentence() {
  const randNum = Math.round(Math.random() * (sentences.length - 1));
  return sentences[randNum];
}
