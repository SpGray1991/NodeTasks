import Queue from "bull";
import milliseconds from "milliseconds";

const scheduler = new Queue("schedulerFirstQueue", {
  defaultJobOptions: { repeat: { every: milliseconds.seconds(20) } },
});

const main = async () => {
  await scheduler.add({ name: "Gray", age: 30 });
};

scheduler.process((_, done) => {
  console.log("Scheduled job");
  done();
});

main().catch(console.error);
