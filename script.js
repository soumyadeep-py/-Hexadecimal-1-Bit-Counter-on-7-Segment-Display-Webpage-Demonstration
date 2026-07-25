let powerBtn = document.querySelector("#power"),
    powerOn = false,
    currentNum = 0;
const clickSound = new Audio("click.mp3");
clickSound.preload = "auto";
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {
        // ignore autoplay restrictions or playback failures
    });
}
const hexSegments = {
    0   : "1111110",
    1   : "0110000",
    2   : "1101101",
    3   : "1111001",
    4   : "0110011",
    5   : "1011011",
    6   : "1011111",
    7   : "1110000",
    8   : "1111111",
    9   : "1111011",
    10  : "1110111",
    11  : "0011111", // displays as lowercase b
    12  : "1001110",
    13  : "0111101", // displays as lowercase d
    14  : "1001111",
    15  : "1000111"
};

const segments = [ "a", "b", "c", "d", "e", "f", "g" ];

let display = (hexCode) => {
    for (let i = 0; i < segments.length; i++) {
        const segName = segments[i];
        const el = document.querySelector(`.${segName}`);
        if (!el) continue;
        const on = String(hexCode[i]) === '1';
        if (on) el.classList.add('on');
        else el.classList.remove('on');
    }
}

let listenersSetup = false;
function setupListeners() {
    if (listenersSetup) return;
    listenersSetup = true;
    for (let n = 0; n <= 9; n++) {
        const numpad = document.querySelector(`#numpad-${n}`);
        if (!numpad) continue;
        numpad.addEventListener('click', () => {
            if (!powerOn) return; // ignore presses when power is off
            playClickSound();
            currentNum = n;
            display(hexSegments[currentNum]);
        });
    }
    const increment = document.querySelector('#increment');
    const decrement = document.querySelector('#decrement');
    if (increment) increment.addEventListener('click', () => {
        if (!powerOn) return;
        playClickSound();
        if (currentNum < 15) currentNum += 1;
        display(hexSegments[currentNum]);
    });
    if (decrement) decrement.addEventListener('click', () => {
        if (!powerOn) return;
        playClickSound();
        if (currentNum > 0) currentNum -= 1;
        display(hexSegments[currentNum]);
    });
}

powerBtn.addEventListener("click", function(){
    const wasOn = powerOn;
    powerOn = !powerOn;
    playClickSound();
    if (powerOn && !wasOn) {
        // powering on from off: reset currentNum to 0 and show display
        currentNum = 0;
        powerBtn.style.color = "white";
        powerBtn.style.backgroundColor = "red";
        setupListeners();
        display(hexSegments[currentNum]);
    } else if (!powerOn && wasOn) {
        // powering off: clear display
        powerBtn.style.color = "";
        powerBtn.style.backgroundColor = "";
        for (let i = 0; i < segments.length; i++) {
            const el = document.querySelector(`.${segments[i]}`);
            if (el) el.classList.remove('on');
        }
    }
});

// ensure listeners are attached once on load
setupListeners();

function updateThemeButtons() {
    const themeContainer = document.querySelector('#theme');
    if (!themeContainer) return;
    if (document.body.classList.contains('light')) {
        document.querySelector("#heading").classList.add("light");
        document.querySelector("#heading").classList.remove("dark");
        themeContainer.classList.add('light');
        themeContainer.classList.remove('dark');
    } else {
        document.querySelector("#heading").classList.add("dark");
        document.querySelector("#heading").classList.remove("light");
        themeContainer.classList.add('dark');
        themeContainer.classList.remove('light');
    }
}

function setupTheme() {
    const themeContainer = document.querySelector('#theme');
    if (themeContainer) {
        themeContainer.addEventListener('click', () => {
            playClickSound();
            // toggle opposite theme when any part is clicked
            if (document.body.classList.contains('light')) {
                document.body.classList.remove('light');
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
                document.body.classList.add('light');
            }
            updateThemeButtons();
        });
    }
    // initialize based on current body class
    if (!document.body.classList.contains('light') && !document.body.classList.contains('dark')) {
        document.body.classList.add('dark');
    }
    updateThemeButtons();
}

// initialize theme handlers immediately
setupTheme();