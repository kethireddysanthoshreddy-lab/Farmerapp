from flask import Flask, render_template, request

app = Flask(__name__)

# Crop database
crops = [
    {
        "name": "Rice",
        "soil": "Loamy",
        "season": "Kharif",
        "water": "High",
        "fertilizer": "Use Urea and DAP",
        "irrigation": "Frequent irrigation required"
    },
    {
        "name": "Wheat",
        "soil": "Loamy",
        "season": "Rabi",
        "water": "Medium",
        "fertilizer": "Use NPK fertilizer",
        "irrigation": "Irrigate every 15 days"
    },
    {
        "name": "Groundnut",
        "soil": "Sandy",
        "season": "Kharif",
        "water": "Low",
        "fertilizer": "Use Gypsum",
        "irrigation": "Light irrigation needed"
    }
]

@app.route("/", methods=["GET", "POST"])
def home():
    result = None

    if request.method == "POST":
        soil = request.form["soil"]
        season = request.form["season"]
        water = request.form["water"]

        for crop in crops:
            if crop["soil"] == soil and crop["season"] == season and crop["water"] == water:
                result = crop
                break

    return render_template("index.html", result=result)

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)