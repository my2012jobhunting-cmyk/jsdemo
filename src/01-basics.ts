/**
 * TypeScript 基础类型示例
 * 学习目标：掌握 TS 的基本数据类型
 */

// ===== 1. 基础类型 =====

// 字符串
const name: string = "张三";
// 数字
const age: number = 25;
// 布尔值
const isStudent: boolean = true;

// 数组
const numbers: number[] = [1, 2, 3, 4, 5];
const names: Array<string> = ["李四", "王五"]; // 泛型语法

// 元组（固定长度、固定类型的数组）
const person: [string, number, boolean] = ["赵六", 30, true];

// 枚举
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue"
}
const myColor: Color = Color.Blue;

// ===== 2. any 和 unknown =====

// any: 任意类型，关闭类型检查（不推荐滥用）
let anything: any = "hello";
anything = 123;
anything = true;

// unknown: 未知类型，比 any 安全
let something: unknown = "world";
// something.toUpperCase(); // 报错！需要类型检查

// ===== 3. void 和 never =====

// void: 函数没有返回值
function sayHello(): void {
  console.log("你好！");
}

// never: 函数永远不返回（抛出异常或无限循环）
function throwError(): never {
  throw new Error("出错了！");
}

function infiniteLoop(): never {
  while (true) {
    // 无限循环
  }
}

// ===== 4. 打印输出示例 =====

console.log("===== 基础类型示例 =====");
console.log("姓名:", name);
console.log("年龄:", age);
console.log("是否学生:", isStudent);

console.log("\n===== 数组 =====");
console.log("数字数组:", numbers);
console.log("名字数组:", names);

console.log("\n===== 元组 =====");
console.log("人员信息:", person);

console.log("\n===== 枚举 =====");
console.log("我的颜色:", myColor);

console.log("\n===== any 和 unknown =====");
console.log("anything (any):", anything);
// console.log(something.toUpperCase()); // 会报错

console.log("\n===== 函数测试 =====");
sayHello();

export {};
