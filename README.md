/**
 * TypeScript 学习指南
 * 按顺序学习这些文件
 */

// ===== 学习路径 =====

// 1. 基础入门
//    01-basics.ts       - 基础类型：string, number, boolean, array, tuple, enum, any, void, never

// 2. 类型进阶
//    02-interface-type.ts - 接口和类型别名：interface, type, 联合类型, 交叉类型

// 3. 函数
//    03-function.ts     - 函数类型：参数类型，返回值类型，可选参数，默认参数，函数重载

// 4. 面向对象
//    04-class.ts       - 类：构造函数，访问修饰符，继承，抽象类，getter/setter

// 5. 泛型
//    05-generics.ts    - 泛型：泛型函数，泛型接口，泛型类，泛型约束，工具类型

// 6. 模块化
//    06-module.ts      - 模块和命名空间：导入，导出，默认导出

// 7. 综合实战
//    07-practice.ts    - 综合示例：完整的数据结构和业务逻辑

// ===== 推荐学习顺序 =====

/*
  第一天：01 + 02
  第二天：03 + 04
  第三天：05
  第四天：06 + 07
*/

// ===== 运行方式 =====

// 1. 安装 TypeScript
//    npm install -g typescript

// 2. 编译单个文件
//    tsc 01-basics.ts

// 3. 编译整个项目（需要 tsconfig.json）
//    tsc

// 4. 实时编译
//    tsc --watch

// 5. 在 Node.js 中运行
//    tsc 01-basics.ts && node 01-basics.js

// ===== 实战建议 =====

// 1. 每个例子都要手动敲一遍，不要复制粘贴
// 2. 尝试修改例子中的值，看看会发生什么
// 3. 遇到报错不要慌，这是学习 TS 的最好机会
// 4. 可以用 TypeScript Playground (https://www.typescriptlang.org/play/) 在线练习
