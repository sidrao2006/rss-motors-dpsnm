// heatseat color animation function
export function changeColor(heatseat) {
    heatseat.classList.toggle("heat-seat-red");
    heatseat.classList.toggle("heat-seat");
}
// highbeam direction animation function
export function changeDirection(highbeam) {
    highbeam.classList.toggle("low-beam");
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

// function to set a given theme/color-scheme
export function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
export function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        window.location.reload();
    } else {
        setTheme('theme-dark');
        window.location.reload();

    }
}
