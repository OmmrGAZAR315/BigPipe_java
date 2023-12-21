function loadPagelet(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(html =>
            document.getElementById(elementId).innerHTML = html
            // console.log(html)
        );
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", async function () {
    await sleep(1500);
    loadPagelet('pagelet2', 'pagelet2');
    await sleep(2000);
    loadPagelet('pagelet1', 'pagelet1');
    await sleep(1500);
    loadPagelet('pagelet3', 'pagelet3');
    // Load other pagelets similarly
});