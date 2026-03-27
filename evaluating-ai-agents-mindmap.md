# Evaluating AI Agents 课程脑图

## 📚 课程信息
- **课程名称**: Evaluating AI Agents（评估AI智能体）
- **发布平台**: DeepLearning.AI
- **合作机构**: Arize AI
- **课程讲师**: 
  - John Gilhuly（开发者关系负责人）
  - Aman Khan（Arize AI 产品总监）

---

## 🎯 学习目标
- ✅ 理解并实施评估驱动的开发流程
- ✅ 为智能体工作流添加可观测性
- ✅ 使用多种评估方法评估智能体性能
- ✅ 构建结构化评估实验
- ✅ 将评估方法扩展至生产环境监控

---

## 📖 课程大纲

### 1️⃣ 简介 Introduction
- 课程目标与背景介绍

### 2️⃣ 基础概念
- **大语言模型时代的评估** Evaluation in the time of LLMs
  - LLM作为评估工具的应用场景
- **智能体分解** Decomposing agents
  - 如何拆解智能体的组成模块

### 3️⃣ 构建智能体
- **实验1: 构建你的智能体** Lab 1: Building your agent
  - 搭建数据分析智能体
  - 数据库连接和分析工具

### 4️⃣ 追踪与观测
- **智能体追踪** Tracing agents
  - 追踪智能体每一步的执行过程
- **实验2: 追踪你的智能体** Lab 2: Tracing your agent
  - 实际实现智能体执行轨迹的收集与可视化

### 5️⃣ 评估方法
- **添加路由和工具评估** Adding router and skill evaluations
  - 评估智能体是否正确选择工具并提取参数
- **实验3: 添加路由和工具评估** Lab 3: Adding router and skill evaluations

- **添加路径轨迹评估** Adding trajectory evaluations
  - 评估智能体是否避免重复步骤或陷入循环
- **实验4: 添加路径轨迹评估** Lab 4: Adding trajectory evaluations

### 6️⃣ 评估框架
- **为评估添加结构** Adding structure to your evaluations
  - 将各评估模块整合为结构化实验框架
- **实验5: 为评估添加结构** Lab 5: Adding structure to your evaluations

### 7️⃣ 优化与监控
- **优化LLM作为评估者** Improving your LLM-as-a-judge
  - 提升LLM评估效果的技巧
- **监控智能体** Monitoring agents
  - 将评估方法扩展到生产环境的监控

### 8️⃣ 总结与测验
- **结论** Conclusion
- **测验** Quiz
- **附录** Appendix - Resources, Tips and Help

---

## 🧠 核心内容脑图

```
Evaluating AI Agents
│
├── 1. 评估基础
│   ├── LLM作为评估器
│   └── 智能体分解
│
├── 2. 可观测性
│   ├── 执行追踪 (Tracing)
│   └── 轨迹可视化
│
├── 3. 评估类型
│   ├── 工具评估 (Tool Evaluation)
│   │   └── 检查工具输出质量
│   ├── 路由评估 (Router Evaluation)
│   │   └── 验证工具和参数选择
│   └── 轨迹评估 (Trajectory Evaluation)
│       └── 分析执行效率，避免循环
│
├── 4. 评估框架
│   ├── 结构化实验
│   ├── LLM-as-a-Judge 优化
│   └── 生产环境监控
│
└── 5. 实战项目
    └── 数据分析智能体
```

---

## 🔧 核心技能

| 技能 | 描述 |
|------|------|
| **Tracing** | 追踪智能体每一步执行 |
| **Tool Evaluation** | 评估工具输出质量 |
| **Router Evaluation** | 评估路由决策正确性 |
| **Trajectory Evaluation** | 评估执行路径效率 |
| **LLM-as-a-Judge** | 使用LLM作为自动评估器 |
| **Monitoring** | 生产环境监控 |

---

## 📊 评估维度

```
智能体评估
│
├── 输入评估
│   └── 用户Query是否清晰
│
├── 过程评估
│   ├── 工具选择是否正确
│   ├── 参数提取是否准确
│   └── 执行路径是否高效
│
└── 输出评估
    └── 最终答案质量
```

---

## ⏱️ 时间安排（建议）

| 章节 | 内容 | 建议学习时间 |
|------|------|------------|
| 1-2 | 基础概念 | 15分钟 |
| 3-4 | 构建智能体 | 20分钟 |
| 5-6 | 追踪与观测 | 20分钟 |
| 7-8 | 工具和路由评估 | 30分钟 |
| 9-10 | 轨迹评估 | 15分钟 |
| 11-12 | 评估框架 | 25分钟 |
| 13-14 | 优化与监控 | 15分钟 |
| 15-17 | 总结与测验 | 15分钟 |

**总时长: 约 2.5 小时**
