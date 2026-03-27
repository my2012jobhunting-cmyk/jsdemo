/**
 * TypeScript 函数示例
 * 学习目标：掌握函数的类型定义和高级用法
 */

// ===== 1. 函数参数和返回值的类型 =====

// 基础函数
function add(a: number, b: number): number {
  return a + b;
}

// 箭头函数
const multiply = (a: number, b: number): number => {
  return a * b;
};

// 简化箭头函数
const divide = (a: number, b: number): number => a / b;

// ===== 2. 可选参数和默认参数 =====

// 可选参数（带 ?）
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `你好, ${name}!`;
}

// 默认参数
function introduce(name: string, city: string = "上海"): string {
  return `我是 ${name}，来自 ${city}`;
}

// ===== 3. 剩余参数 =====

function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// ===== 4. 函数类型 =====

// 作为变量类型
let myAdd: (x: number, y: number) => number;

// 赋值函数
myAdd = (x, y) => x + y;

// ===== 5. 函数重载 =====

// 根据参数类型返回不同类型
function parseID(id: number): number;
function parseID(id: string): string;
function parseID(id: string | number): string | number {
  if (typeof id === "number") {
    return id;
  }
  return id.toUpperCase();
}

// ===== 6. 打印测试 =====

console.log("===== 函数示例 =====");
console.log("add(1, 2):", add(1, 2));
console.log("multiply(3, 4):", multiply(3, 4));
console.log("divide(10, 2):", divide(10, 2));
console.log("greet('张三'):", greet("张三"));
console.log("greet('李四', 'Hello'):", greet("李四", "Hello"));
console.log("introduce('王五'):", introduce("王五"));
console.log("sum(1,2,3,4,5):", sum(1, 2, 3, 4, 5));
console.log("parseID(123):", parseID(123));
console.log("parseID('abc'):", parseID("abc"));

export { add, multiply, greet, introduce, sum, parseID };
