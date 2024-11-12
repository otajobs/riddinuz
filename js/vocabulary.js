const words = [
    { english: "begin", russian: "начать" },
    { english: "stay", russian: "остаться" },
    { english: "bring", russian: "принести" },
    { english: "think", russian: "думать" },
    { english: "be allowed", russian: "разрешать" },
    { english: "eat", russian: "есть" },
    { english: "drive", russian: "водить" },
    { english: "catch", russian: "поймать" },
    { english: "find", russian: "найти" },
    { english: "fly", russian: "летать" },
    { english: "give", russian: "дать" },
    { english: "go", russian: "идти" },
    { english: "have", russian: "иметь" },
    { english: "be called", russian: "называться" }
];

let currentIndex = 0;

const wordElement = document.getElementById("word");
const translationElement = document.getElementById("translation");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

function updateWord() {
    wordElement.innerText = words[currentIndex].english;
    translationElement.innerText = '';
}

wordElement.addEventListener("click", () => {
    translationElement.innerText = words[currentIndex].russian;
});

nextButton.addEventListener("click", () => {
    if (currentIndex < words.length - 1) {
        currentIndex++;
        updateWord();
    }
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateWord();
    }
});

// Initialize the first word
updateWord();
