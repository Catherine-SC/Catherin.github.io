function generatePalette() {
    let colors = document.querySelectorAll(".color-box");
    colors.forEach(box => {
        let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        box.style.backgroundColor = randomColor;
        box.children[0].textContent = randomColor; 
    });
}

function copyColor(element) {
    let colorCode = element.children[0].textContent;
    navigator.clipboard.writeText(colorCode);
    alert("Copied: " + colorCode);
}

// Generate a random palette when the page loads
window.onload = generatePalette;
// Function to suggest color palettes based on profession
function generateProfessionalPalette() {
    const profession = document.getElementById("profession-selector").value;
    let colors;

    // Define color palettes for different professions
    if (profession === "social-media") {
        colors = ["#FF1493", "#8A2BE2", "#00CED1", "#FFFF00", "#1E90FF"]; // Bright, vibrant colors
    } else if (profession === "corporate") {
        colors = ["#003366", "#D3D3D3", "#FFFFFF", "#FFD700"]; // Professional, muted colors
    } else if (profession === "health") {
        colors = ["#98FB98", "#ADD8E6", "#F5F5DC", "#D8BFD8"]; // Calming, nature-based colors
    } else if (profession === "ecommerce") {
        colors = ["#FF6347", "#FFD700", "#32CD32", "#FFA500"]; // Bold, action-oriented colors
    } else if (profession === "education") {
        colors = ["#4682B4", "#32CD32", "#FAFAD2", "#9B30FF"]; // Soothing, intellectual colors
    }

    // Apply the color palette to the color boxes
    let colorBoxes = document.querySelectorAll(".color-box");
    colorBoxes.forEach((box, index) => {
        if (colors[index]) {
            box.style.backgroundColor = colors[index];
            box.children[0].textContent = colors[index]; // Show hex code inside box
        }
    });
}