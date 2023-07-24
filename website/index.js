const counter = document.querySelector(".counter-number");
async function updateCounter() {
    try {
        let response = await fetch(
            "https://vwx64f3a7msujpqu43byaskhva0opwnu.lambda-url.us-east-2.on.aws/"
        );
        let data = await response.json();
        counter.innerHTML = ` Views: ${data}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        counter.innerHTML = "Views: N/A";
    }
}

updateCounter();