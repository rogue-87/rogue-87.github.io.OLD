const sentences = [
  "Programmer",
  "Artist(sometimes)",
  "Gamer",
  "Linux",
  "Synthwave",
  "Homestuck",
  "Kitty + Neovim = POWER",
];

export function pickSentence() {
  const randNum = Math.round(Math.random() * (sentences.length - 1));
  return sentences[randNum];
}
