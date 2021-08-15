// heatseat color animation function
export function changeColor(heatseat) {
    heatseat.classList.toggle("heat-seat-red");
    heatseat.classList.toggle("heat-seat");
}
// highbeam direction animation function
export function changeDirection(highbeam) {
    highbeam.classList.toggle("high-beam-down");
    highbeam.classList.toggle("high-beam");
}
// parking red color change function
export function changeColorparking(parking) {
    parking.classList.toggle("red");
}
// indicator flicker animation
export function changeColorindicator(indicators) {
    indicators.classList.toggle("flickercolor");
}

export function changeColorvideocall(videocall) {
    videocall.classList.toggle("green");
}

export function changeMute(sound) {
    sound.classList.toggle("fa");
    sound.classList.toggle("fa-volume-up");

    sound.classList.toggle("fas");
    sound.classList.toggle("fa-volume-mute");

    console.log("mutee")
}

export function updateTemperature(setter, value, key) {
    setter(value);

    window.localStorage.setItem(key, value);
}
