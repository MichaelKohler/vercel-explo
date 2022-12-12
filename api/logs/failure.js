export default function handler(request, response) {
  console.log("I'm gonna be a failure!");
  console.log("Before throwing, test console.error:")
  console.error(new Error("CONSOLE_ERROR"));

  const someError = new Error("Oh no!");

  throw new Error("OH_NO_ERROR", { cause: someError });
}
