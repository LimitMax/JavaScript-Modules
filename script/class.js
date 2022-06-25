export class Person {
  constructor(nama) {
    this.nama = nama;
  }

  sayHello(nama) {
    console.info(`Hello ${nama}, My Name is ${this.nama}`);
  }
}
