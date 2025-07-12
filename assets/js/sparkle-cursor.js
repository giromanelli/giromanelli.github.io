document.addEventListener("DOMContentLoaded", () => {
    const colors = ["#ffb6c1", "#dda0dd", "#87cefa", "#e0ffff", "#fffacd"]; // pastel Y2K palette
    const sparkleCount = 1;
    const sizeRange = [12, 20]; // font-size for ✧
  
    document.addEventListener("mousemove", (e) => {
      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement("div");
        const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
        const color = colors[Math.floor(Math.random() * colors.length)];
  
        sparkle.textContent = "✧";
        sparkle.style.position = "fixed";
        sparkle.style.left = `${e.clientX + (Math.random() * 10 - 5)}px`;
        sparkle.style.top = `${e.clientY + (Math.random() * 10 - 5)}px`;
        sparkle.style.fontSize = `${size}px`;
        sparkle.style.color = color;
        sparkle.style.opacity = "1";
        sparkle.style.pointerEvents = "none";
        sparkle.style.zIndex = 9999;
        sparkle.style.transition = "transform 0.4s ease-out, opacity 0.4s ease-out";
  
        document.body.appendChild(sparkle);
  
        requestAnimationFrame(() => {
          sparkle.style.transform = `scale(1.4) translateY(-8px) rotate(${Math.random() * 40 - 20}deg)`;
          sparkle.style.opacity = "0";
        });
  
        setTimeout(() => sparkle.remove(), 400);
      }
    });
  });
  