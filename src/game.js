import { randInt } from "./rand";

export function play(numberOfPads) {
  let position = 0;
  const path = [];

  while (position < numberOfPads) {
    position = randInt(position + 1, numberOfPads);
    path.push(position);
  }

  return { path };
}
