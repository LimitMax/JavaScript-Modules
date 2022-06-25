export const firstName = "Limit";
export const middleNae = "Max";
export const lastName = "Fire";

export function hello() {
  console.info(`Hello Limit Max Fire`);
}

export class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.info(`Hello ${name}, My Name is ${this.name}`);
  }
}
