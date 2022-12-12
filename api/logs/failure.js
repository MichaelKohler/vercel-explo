export default function handler(request, response) {
  console.log("I'm gonna be a failure!");

  const someError = new Error("Oh no!");

  throw new Error("OH_NO_ERROR", { cause: someError });
}
