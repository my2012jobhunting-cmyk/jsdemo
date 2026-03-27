/**
 * TypeScript 模块和命名空间示例
 * 学习目标：掌握代码组织和导入导出
 */

// ===== 1. 导出方式 =====

// 命名导出（可多个）
export const PI = 3.14159;

export function circleArea(radius: number): number {
  return PI * radius * radius;
}

export class Circle {
  constructor(public radius: number) {}
  area(): number {
    return circleArea(this.radius);
  }
}

// 默认导出（只能一个）
export default class Rectangle {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

// ===== 2. 命名空间 =====

export namespace Utils {
  export function formatDate(date: Date): string {
    return date.toLocaleDateString("zh-CN");
  }

  export function formatCurrency(amount: number): string {
    return `¥${amount.toFixed(2)}`;
  }
}

// ===== 3. 测试导出 =====

console.log("===== 模块导出示例 =====");
console.log("PI:", PI);
console.log("圆面积(r=5):", circleArea(5));

const rect = new Rectangle(10, 20);
console.log("矩形面积:", rect.area());

console.log("Utils.formatDate:", Utils.formatDate(new Date()));
console.log("Utils.formatCurrency:", Utils.formatCurrency(1234.5));

export {};
