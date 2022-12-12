export default function handler(request, response) {
  console.log("I'm gonna be a success!");
  console.log("Some data", {
    foo: 42,
    bar: 21,
  });
  console.log("More data without any message below:")
  console.log({ baz: "test" });
  response.status(200).json({ foo: 42 });
}
