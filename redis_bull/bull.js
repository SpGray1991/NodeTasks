import Queue from "bull";

const queue = new Queue("firstQueue");

const main = async () => {
  await queue.add({ name: "Gray", age: 30 });
};

queue.process((job, done) => {
  console.log(job.data);
  done();
});

main().catch(console.error);
