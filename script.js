// 獲取按鈕元素
const button = document.getElementById("clickButton");

// 添加點擊事件
button.addEventListener("click", () => {
    // 在控制台打印消息
    console.log("按鈕被點擊了！");

    // 在網頁上顯示一段新文字
    const message = document.createElement("p"); // 創建段落元素
    message.textContent = "你剛剛點擊了按鈕！"; // 設置段落的文字內容
    document.body.appendChild(message); // 將段落添加到網頁
});
