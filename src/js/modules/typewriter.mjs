/*
  speed: millisecond.
  text : string.
  elem : HTML Element to write to.
*/

let running = false;
export function write(elem = document.body, text = "lorem", speed = 50) {
  if (running) {
    return;
  }
  running = true;
  elem.innerText = ">";
  let pen = 0;

  const intervalId = setInterval(() => {
    elem.textContent += text.charAt(pen);
    pen++;

    if (pen >= text.length) {
      clearInterval(intervalId);
      running = false;
    }
  }, speed);
}
