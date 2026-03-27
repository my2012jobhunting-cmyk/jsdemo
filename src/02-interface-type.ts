/**
 * TypeScript 接口和类型别名示例
 * 学习目标：掌握接口和 type 的定义和使用
 */

// ===== 1. 接口 Interface =====

// 基本接口
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // 可选属性
  readonly createdAt: string; // 只读属性
}

const user1: User = {
  id: 1,
  name: "张三",
  email: "zhangsan@example.com",
  createdAt: "2024-01-01"
};

// 接口继承
interface Student extends User {
  grade: string;
  score: number;
}

const student1: Student = {
  id: 2,
  name: "李四",
  email: "lisi@example.com",
  createdAt: "2024-01-15",
  grade: "三年级",
  score: 95
};

// ===== 2. 类型别名 Type =====

// 基本类型别名
type Status = "pending" | "success" | "error";
const currentStatus: Status = "success";

// 联合类型
type ID = string | number;
const userId: ID = "abc123";
const postId: ID = 123;

// 交叉类型（合并多个类型）
type Employee = {
  company: string;
  salary: number;
};

type FullPerson = User & Employee;

const employee: FullPerson = {
  id: 3,
  name: "王五",
  email: "wangwu@example.com",
  createdAt: "2024-02-01",
  company: "某公司",
  salary: 15000
};

// ===== 3. 打印测试 =====
console.log("===== 接口示例 =====");
console.log("User:", user1);
console.log("Student:", student1);
console.log("Status:", currentStatus);
console.log("Employee:", employee);

export { User, Student, Status, ID, FullPerson };
