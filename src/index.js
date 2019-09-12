function main() {
  if (!Worker) {
    alert(
      "Sorry, but your browser does not support web workers, which are required by this website."
    );
    return;
  }

  const btnRun = document.getElementById("run");
  const inputNumberOfGames = document.getElementById("numberOfGames");
  const inputMinNumberOfPads = document.getElementById("minNumberOfPads");
  const inputMaxNumberOfPads = document.getElementById("maxNumberOfPads");
  const inputNumberOfThreads = document.getElementById("numberOfThreads");
  const output = document.getElementById("output");

  const clearOutput = () => {
    output.value = "";
  };

  const addDataRow = row => {
    output.value += `${row.numberOfPads},${row.averageJumps}\n`;
  };

  btnRun.addEventListener("click", async () => {
    const numberOfGames = inputNumberOfGames.value;
    const minNumberOfPads = inputMinNumberOfPads.value;
    const maxNumberOfPads = inputMaxNumberOfPads.value;
    const numberOfThreads = inputNumberOfThreads.value;
    const numberOfGamesPerThread = Math.round(numberOfGames / numberOfThreads);

    clearOutput();

    const workers = [];
    for (let thread = 0; thread < numberOfThreads; thread++) {
      workers.push(new Worker("worker.js"));
    }

    for (
      let numberOfPads = minNumberOfPads;
      numberOfPads <= maxNumberOfPads;
      numberOfPads++
    ) {
      const promises = [];

      for (let thread = 0; thread < numberOfThreads; thread++) {
        promises.push(
          new Promise(resolve => {
            const worker = workers[thread];

            worker.onmessage = e => {
              resolve(e.data);
            };

            worker.postMessage({
              numberOfGames: numberOfGamesPerThread,
              numberOfPads
            });
          })
        );
      }

      const results = await Promise.all(promises);
      const jumps = results.reduce((sum, result) => sum + result.jumps, 0);
      const averageJumps = jumps / (numberOfThreads * numberOfGamesPerThread);
      addDataRow({ numberOfPads, averageJumps });
    }
  });
}

document.addEventListener("DOMContentLoaded", main);
