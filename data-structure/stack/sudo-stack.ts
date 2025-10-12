/**
 * @description 호출 스택을 위한 코드
 */

function bye(name: string) {
  console.log(`Goodbye, ${name}!`);
}

function greetAgain(name: string) {
  console.log(`Hello again, ${name}!`);
  bye(name);
}

function greetHello(name: string) {
  console.log(`Hello, ${name}!`);
  greetAgain(name);
}

greetHello("Hyun");
