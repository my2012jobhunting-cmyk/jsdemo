/**
 * TypeScript 泛型 Generics 示例
 * 学习目标：掌握泛型的定义和使用，让代码更灵活
 */

// ===== 1. 基础泛型 =====

// 泛型函数：T 是类型参数
function identity<T>(value: T): T {
  return value;
}

// 使用时自动推断类型
const num = identity(123);      // number
const str = identity("hello");  // string
const arr = identity([1, 2, 3]); // number[]

// ===== 2. 泛型接口 =====

interface Response<T> {
  code: number;
  message: string;
  data: T;
}

// 使用泛型接口
interface User {
  id: number;
  name: string;
  email?: string;
}

const userResponse: Response<User> = {
  code: 200,
  message: "成功",
  data: {
    id: 1,
    name: "张三"
  }
};

// ===== 3. 泛型类 =====

class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

// ===== 4. 泛型约束 =====

interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

// ===== 5. 多个类型参数 =====

function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

// ===== 6. 实用泛型工具类型 =====

// Partial: 所有属性变为可选
type PartialUser = Partial<User>;

// Pick: 选择部分属性
type UserPreview = Pick<User, "id" | "name">;

// Omit: 排除部分属性
type UserWithoutEmail = Omit<User, "email">;

// ===== 打印测试 =====

console.log("===== 泛型示例 =====");
console.log("identity(123):", num);
console.log("identity('hello'):", str);
console.log("userResponse:", userResponse);

const container = new Container(100);
console.log("Container:", container.getValue());

console.log("logLength('hello'):", logLength("hello"));
console.log("logLength([1,2,3]):", logLength([1, 2, 3]));

console.log("pair(1, 'a'):", pair(1, "a"));

console.log("PartialUser:", {});
console.log("UserPreview:", { id: 1, name: "test" } as UserPreview);

export {
  identity,
  Response,
  Container,
  pair,
  logLength,
  User,
  PartialUser,
  UserPreview,
  UserWithoutEmail
};
