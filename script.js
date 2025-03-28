function getJoke(category = "Any") {
    const url = `https://v2.jokeapi.dev/joke/${category}?safe-mode`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const jokeText = document.getElementById("joke");
        const title = document.getElementById("title");

        if(data.type === "single") {
            jokeText.textContent = data.joke;
        }
        else if(data.type === "twopart") {
            jokeText.textContent = `${data.setup} ... ${data.delivery}`;
        }

        if(category === "Any") {

            title.textContent = "😂Joke of the Day!🤡";
        } 
        else if(category === "Pun") {
            title.textContent = "A Random Pun";
        }
        else {
            title.textContent = `A Random ${category} Joke`; 
        }
    })
    
    .catch(error => {
        
        document.getElementById("joke").textContent = "Oopsies! The joke is taking a call right now... try again in a sec!";
        console.error("Error fetching joke:", error);
    });
}

window.onload = () => {
    getJoke();
};