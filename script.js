function analyze() {

    let soil = document.getElementById("soil").value;
    let season = document.getElementById("season").value;
    let temp = document.getElementById("temperature").value;
    let rain = document.getElementById("rainfall").value;

    let cropResult = document.getElementById("cropResult");
    let fertilizer = document.getElementById("fertilizer");
    let pest = document.getElementById("pest");
    let resultBox = document.getElementById("resultBox");

    if (soil === "" || season === "" || temp === "" || rain === "") {
        alert("Please fill all details!");
        return;
    }

    if (soil === "black" && season === "rainy" && rain > 200) {
        cropResult.innerHTML = "🌾 Recommended Crop: Cotton";
        fertilizer.innerHTML = "Fertilizer: Nitrogen-rich fertilizer.";
        pest.innerHTML = "Pest Advice: Monitor bollworms regularly.";
    }
    else if (soil === "red" && season === "winter" && temp < 25) {
        cropResult.innerHTML = "🌽 Recommended Crop: Wheat";
        fertilizer.innerHTML = "Fertilizer: Phosphorus-based fertilizer.";
        pest.innerHTML = "Pest Advice: Protect from aphids.";
    }
    else if (soil === "sandy" && season === "summer") {
        cropResult.innerHTML = "🥜 Recommended Crop: Groundnut";
        fertilizer.innerHTML = "Fertilizer: Organic compost recommended.";
        pest.innerHTML = "Pest Advice: Watch for leaf miners.";
    }
    else {
        cropResult.innerHTML = "🌱 Recommended Crop: Rice or Maize";
        fertilizer.innerHTML = "Fertilizer: Balanced NPK fertilizer.";
        pest.innerHTML = "Pest Advice: Regular field inspection needed.";
    }

    resultBox.style.display = "block";
}