document.getElementById("funButton").addEventListener("click", function() {
    const button = document.getElementById("funButton");
    const message = document.getElementById("message");

    // ปุ่มย้ายตำแหน่งไปๆ มาๆ
    button.style.position = "relative";
    button.style.top = Math.random() * 450 + "px";
    button.style.left = Math.random() * 450 + "px";

    // เปลี่ยนข้อความ
    message.textContent = "ทำไมปุ่มถึงหนีไป??! ลองคลิกใหม่อีกที!";
    message.style.color = "#ff5733";

    // เพิ่มเสียงตลก
    let audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
    audio.play();
});
