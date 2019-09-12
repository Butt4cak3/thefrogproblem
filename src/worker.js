import { play } from "./game";

onmessage = function(e) {
  const { numberOfGames, numberOfPads } = e.data;
  let jumps = 0;

  for (let i = 0; i < numberOfGames; i++) {
    const { path } = play(numberOfPads);
    jumps += path.length;
  }

  postMessage({ jumps });
};
