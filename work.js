onmessage = (message) => {
  console.log(`The command was ${message.data}`);
  if (message.data === "do count") {
    console.log(`Worker is working... ⚒`);

    let totalAmount = 0;
    for (let i = 0; i < 10000000000; i++) {
      totalAmount += i;
    }
    postMessage(totalAmount);
    console.log("Worker has finished work 🏆");
  } else {
    console.log("So Worker is not working😢");
  }
};
