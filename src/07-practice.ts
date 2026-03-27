/**
 * TypeScript 综合实战示例
 * 学习目标：将所有知识点串联起来
 */

// ===== 1. 定义数据类型 =====

// 用户类型
interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
}

// 订单类型
interface Order {
  id: string;
  userId: number;
  items: OrderItem[];
  totalAmount: number;
  status: "pending" | "paid" | "shipped" | "completed" | "cancelled";
  createdAt: Date;
}

// 订单项
interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
}

// ===== 2. 工具函数 =====

function formatDate(date: Date): string {
  return date.toLocaleDateString("zh-CN");
}

function formatCurrency(amount: number): string {
  return `¥${amount.toFixed(2)}`;
}

function calculateTotal(items: OrderItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// ===== 3. 订单服务类 =====

class OrderService {
  private orders: Order[] = [];

  createOrder(userId: number, items: OrderItem[]): Order {
    const order: Order = {
      id: `ORD${Date.now()}`,
      userId,
      items,
      totalAmount: calculateTotal(items),
      status: "pending",
      createdAt: new Date()
    };
    this.orders.push(order);
    return order;
  }

  getOrdersByUser(userId: number): Order[] {
    return this.orders.filter(order => order.userId === userId);
  }

  updateOrderStatus(orderId: string, status: Order["status"]): Order | null {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = status;
      return order;
    }
    return null;
  }
}

// ===== 4. 使用示例 =====

const orderService = new OrderService();

const items: OrderItem[] = [
  { productId: 1, productName: "iPhone 15", quantity: 1, price: 6999 },
  { productId: 2, productName: "AirPods Pro", quantity: 2, price: 1899 }
];

const order = orderService.createOrder(1001, items);

console.log("=== 订单信息 ===");
console.log("订单号:", order.id);
console.log("订单状态:", order.status);
console.log("订单金额:", formatCurrency(order.totalAmount));
console.log("创建时间:", formatDate(order.createdAt));

orderService.updateOrderStatus(order.id, "paid");
console.log("更新后状态:", order.status);

const userOrders = orderService.getOrdersByUser(1001);
console.log("用户订单数:", userOrders.length);

export { User, Order, OrderItem, OrderService };
