document.addEventListener("DOMContentLoaded", async function () {
    let RandomPageletesOrder = getUniqueRandomNumber(1, 3)


    await sleep(1200);
    loadPagelet('pagelet' + RandomPageletesOrder[0], 'pagelet' + RandomPageletesOrder[0]);

    await sleep(1500);
    loadPagelet('pagelet' + RandomPageletesOrder[1], 'pagelet' + RandomPageletesOrder[1]);

    await sleep(1000);
    loadPagelet('pagelet' + RandomPageletesOrder[2], 'pagelet' + RandomPageletesOrder[2]);
});

function loadPagelet(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(html =>
            document.getElementById(elementId).innerHTML = html
        );
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getUniqueRandomNumber(min, max) {
    let uniqueNumbers = [];
    while (uniqueNumbers.length < 3) {
        let randomNumber = getRandomNumber(min, max);
        console.log(randomNumber)

        if (!uniqueNumbers.includes(randomNumber))
            uniqueNumbers.push(randomNumber)

    }
    return uniqueNumbers
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}