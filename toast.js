// toast.js - 仅用于手动关闭的免责声明弹窗
window.Toast = {
  // 免责声明弹窗（手动关闭，居中显示）
  showDisclaimer: function() {
    // 避免重复弹窗
    const oldModal = document.getElementById('disclaimer-modal');
    if (oldModal) oldModal.remove();

    // 1. 创建遮罩层（全屏半透明）
    const mask = document.createElement('div');
    mask.id = 'disclaimer-mask';
    mask.style.cssText = `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background: rgba(0,0,0,0.6) !important;
      z-index: 99998 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    `;

    // 2. 创建弹窗主体（居中）
    const modal = document.createElement('div');
    modal.id = 'disclaimer-modal';
    modal.style.cssText = `
      width: 80% !important;
      max-width: 600px !important;
      background: #fff !important;
      border-radius: 12px !important;
      padding: 30px 25px !important;
      box-shadow: 0 8px 30px rgba(0,0,0,0.3) !important;
      position: relative !important;
    `;

    // 3. 弹窗内容（免责声明）
    modal.innerHTML = `
      <h3 style="color: #ff6b6b; font-size: 18px; margin-bottom: 15px; text-align: center;">免责声明</h3>
      <p style="color: #333; font-size: 14px; line-height: 1.8; margin-bottom: 25px;">
        本站仅为工具导航服务，不制作、不存储任何工具内容，所有工具链接均来自互联网公开资源。
        用户使用第三方工具时产生的一切行为、版权、合规问题，均由用户自行承担。若有侵权，请联系站长删除相关链接。
      </p>
      <button id="close-disclaimer" style="
        display: block !important;
        margin: 0 auto !important;
        padding: 10px 30px !important;
        background: #87E8DE !important;
        color: #fff !important;
        border: none !important;
        border-radius: 8px !important;
        font-size: 16px !important;
        cursor: pointer !important;
      ">我已知晓并同意</button>
    `;

    // 4. 关闭按钮逻辑
    modal.querySelector('#close-disclaimer').onclick = function() {
      mask.remove(); // 同时移除遮罩和弹窗
    };

    // 5. 组装并添加到页面
    mask.appendChild(modal);
    document.body.appendChild(mask);
  }
};