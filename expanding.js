
var numWaves = 10; // Don't go past 25
var waves = [];

for (let i = 0; i < numWaves; i++) {
    let div = document.createElement('div');
    div.className = 'wave';
    document.body.appendChild(div);
    waves.push(div);
}

for (let i = 0; i < numWaves; i++) {
    waves[i].style.animationName = "expand";
    waves[i].style.animationDuration = "1s";
    waves[i].style.animationIterationCount = "infinite";
    waves[i].style.animationTimingFunction = "ease-in";
    let = delay = i/numWaves;
    waves[i].style.animationDelay = delay.toString() + "s";
}




var durSlider = document.getElementById("dur-slider");

durSlider.addEventListener("change", function() {
    let dur = durSlider.value;
    console.log(dur);
    for (let i = 0; i < numWaves; i++) {
        waves[i].style.animationDuration = dur.toString() + "s";
        waves[i].style.animationDelay = ((i*dur)/numWaves).toString() + "s";
    }
});

var colors = ["blue", "red", "yellow", "green"];
var colorSlider = document.getElementById("color-slider");
colorSlider.addEventListener("change", function() {
    let index = colorSlider.value;
    for (let i = 0; i < waves.length; i++) {
        waves[i].style.backgroundColor = colors[index];
    }
});