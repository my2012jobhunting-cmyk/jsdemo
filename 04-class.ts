/**
 * TypeScript 类 Class 示例
 * 学习目标：掌握类的定义、继承、修饰符等
 */

// ===== 1. 基础类 =====

class Animal {
  // 属性
  name: string;
  age: number;

  // 构造函数
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 方法
  speak(): void {
    console.log(`${this.name} 发出了声音`);
  }
}

// ===== 2. 访问修饰符 =====

class Person {
  public name: string;      // 公开：任何地方都能访问
  protected age: number;    // 受保护：只能在类或子类中访问
  private secret: string;   // 私有：只能在类本身访问

  constructor(name: string, age: number, secret: string) {
    this.name = name;
    this.age = age;
    this.secret = secret;
  }

  public introduce(): void {
    console.log(`我叫 ${this.name}，${this.age} 岁`);
    console.log(`秘密: ${this.secret}`);
  }
}

// ===== 3. 继承 =====

class Cat extends Animal {
  // 重写父类方法
  speak(): void {
    console.log(`${this.name} 喵喵叫~`);
  }

  // 子类特有方法
  climb(): void {
    console.log(`${this.name} 在爬树`);
  }
}

// ===== 4. 抽象类 =====

// 抽象类：不能直接实例化，只能被继承
abstract class Shape {
  abstract area(): number; // 抽象方法：子类必须实现

  describe(): void {
    console.log(`这是一个形状，面积是 ${this.area()}`);
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

// ===== 5. Getter 和 Setter =====

class BankAccount {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) {
      console.log("余额不能为负数");
      return;
    }
    this._balance = value;
  }
}

// ===== 打印测试 =====

console.log("===== 类示例 =====");
const dog = new Animal("旺财", 3);
dog.speak();

const person = new Person("张三", 25, "我怕猫");
person.introduce();

const cat = new Cat("咪咪", 2);
cat.speak();
cat.climb();

const rect = new Rectangle(10, 5);
rect.describe();

const account = new BankAccount();
account.balance = 1000;
console.log("余额:", account.balance);

export { Animal, Person, Cat, Shape, Rectangle, BankAccount };
