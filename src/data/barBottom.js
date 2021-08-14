// heatseat border bottom animation function
export function changeColor(heatseat) {
    heatseat.classList.toggle("heatseatToggle");
}
// parking red color change function
export function changeColorparking(parking) {
    parking.classList.toggle("red");
}
// indicator flicker animation
export function changeColorindicator(indicators) {
    indicators.classList.toggle("flickercolor");
}

export function changeMute(sound) {
    sound.classList.toggle("fa");
    sound.classList.toggle("fa-volume-up");

    sound.classList.toggle("fas");
    sound.classList.toggle("fa-volume-mute");

    console.log("mutee")
}
