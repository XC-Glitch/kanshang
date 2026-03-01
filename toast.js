// toast.js - 独立弹窗工具（确保能弹出）
window.Toast = {
  // 基础提示
  show: function(message, type = 'default') {
    // 先移除已有弹窗，避免重复
    const oldToast = document.getElementById('custom-toast');
    if (oldToast) oldToast.remove();

    // 创建弹窗元素
    const toast = document.createElement('div');
    toast.id = 'custom-toast';
    // 核心样式：固定定位 + 最高层级，确保不被遮挡
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      padding: 12px 24px;
      border-radius: 8px;
      color: #fff;
      font-size: 14px;
      z-index: 99999; /* 超高层级，避免被遮挡 */
      opacity: 0;
      transition: opacity 0.3s ease;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;

    // 不同类型的背景色
    if (type === 'success') {
      toast.style.background = '#6BC9BE'; // 成功绿
    } else if (type === 'error') {
      toast.style.background = '#ff6b6b'; // 错误红
    } else {
      toast.style.background = '#333';    // 默认黑
    }

    toast.textContent = message;
    document.body.appendChild(toast);

    // 显示动画
    setTimeout(() => {
      toast.style.opacity = 1;
    }, 10);

    // 3秒后关闭
    setTimeout(() => {
      toast.style.opacity = 0;
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },
  // 快捷方法：成功提示
  success: function(msg) {
    this.show(msg, 'success');
  },
  // 快捷方法：错误提示
  error: function(msg) {
    this.show(msg, 'error');
  }
};