const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generate-btn");


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function generatePalette() {
    palette.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const block = document.createElement("div");
        block.classList.add("color-block");
        block.style.backgroundcolor = color;
        block.innerHTML = color;
        block.onclick = () => {
            navigator.clipboard.writeText(color);
            alert('Copied ${color}to ClipBoard')

        };
        palette.appendChild(block);
    }
}
generatePalette();
generateBtn.addEventListener("Click", generatePalette);
