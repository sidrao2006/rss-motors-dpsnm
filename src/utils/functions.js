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
// car color change 
export function changeColorcar(car) {
    car.classList.toggle("color-red");
}
// find bluetooth
export function findbluetooth(bluetoothIcon) {
    console.log(bluetoothIcon.style.color);

    if (bluetoothIcon.classList.contains("blue")) {
        bluetoothIcon.classList.toggle('blue', false)

    } else {
        navigator.bluetooth.requestDevice({ acceptAllDevices: true }).then(() => {
            bluetoothIcon.classList.toggle("blue", true)
        }).catch(e => console.error(e))
        console.log(bluetoothIcon.style.color);
    }
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

export function manageDNRPsizes() {
    const dnrpDOMelems = document.getElementsByClassName('dnrp');

    for (var i = 0; i < dnrpDOMelems.length; i++) {
        dnrpDOMelems[i].addEventListener('click', e => {
            e.target.classList.toggle('dnrp-max');
            e.target.classList.toggle('dnrp');

            const dnrpElems = document.getElementsByClassName('dnrp-max');

            for (var i = 0; i < dnrpElems.length; i++) {
                if (dnrpElems[i] !== e.target) {
                    dnrpElems[i].classList.remove('dnrp-max');
                }
            }
        });
    }
}