const config = {
  portalUrl: "https://portal-official-aiyouxi.com.cn",
  keyword: "爱游戏",
  cards: [
    { title: "欢迎体验", content: "第一时间获取最新游戏资讯与福利活动，尽在官方平台。" },
    { title: "安全提示", content: "请认准唯一官方域名，谨防仿冒网站与虚假链接。" },
    { title: "联系支持", content: "如遇问题，请通过官网客服通道与我们取得联系。" }
  ],
  badges: ["热门推荐", "新游上线", "限时活动", "爱游戏"]
};

function createCard(cardData) {
  const card = document.createElement("div");
  card.className = "helper-card";
  const title = document.createElement("h3");
  title.textContent = cardData.title;
  const content = document.createElement("p");
  content.textContent = cardData.content;
  card.appendChild(title);
  card.appendChild(content);
  return card;
}

function createBadge(text) {
  const span = document.createElement("span");
  span.className = "helper-badge";
  span.textContent = text;
  return span;
}

function buildAccessNotice() {
  const notice = document.createElement("div");
  notice.className = "helper-notice";
  const strong = document.createElement("strong");
  strong.textContent = "访问说明";
  const p = document.createElement("p");
  p.textContent = `为确保最佳体验，请直接访问官方门户：${config.portalUrl}。推荐使用最新版 Chrome、Firefox 或 Edge 浏览器。`;
  notice.appendChild(strong);
  notice.appendChild(p);
  return notice;
}

function renderWidget() {
  const existing = document.getElementById("site-helper-widget");
  if (existing) existing.remove();

  const widget = document.createElement("div");
  widget.id = "site-helper-widget";
  widget.style.cssText = "position:fixed;bottom:20px;right:20px;z-index:9999;background:#fff;border:1px solid #e0e0e0;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.1);padding:16px;max-width:320px;font-family:sans-serif;font-size:14px;line-height:1.5;color:#333;";

  const header = document.createElement("div");
  header.textContent = `🔍 ${config.keyword} 助手`;
  header.style.cssText = "font-weight:bold;margin-bottom:10px;font-size:16px;color:#1a73e8;border-bottom:1px solid #eee;padding-bottom:8px;";

  widget.appendChild(header);

  const cardsContainer = document.createElement("div");
  cardsContainer.style.cssText = "margin-bottom:12px;";
  config.cards.forEach(c => cardsContainer.appendChild(createCard(c)));
  widget.appendChild(cardsContainer);

  const badgesContainer = document.createElement("div");
  badgesContainer.style.cssText = "margin-bottom:12px;";
  config.badges.forEach(b => {
    const badge = createBadge(b);
    badge.style.cssText = "display:inline-block;background:#e8f0fe;color:#1a73e8;border-radius:12px;padding:2px 10px;margin:2px 4px 2px 0;font-size:12px;font-weight:500;";
    badgesContainer.appendChild(badge);
  });
  widget.appendChild(badgesContainer);

  widget.appendChild(buildAccessNotice());

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✕";
  closeBtn.style.cssText = "position:absolute;top:8px;right:8px;background:none;border:none;cursor:pointer;font-size:16px;color:#999;";
  closeBtn.addEventListener("click", () => widget.remove());
  widget.appendChild(closeBtn);

  document.body.appendChild(widget);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderWidget);
} else {
  renderWidget();
}