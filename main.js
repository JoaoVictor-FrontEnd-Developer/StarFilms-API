const container = document.querySelector(".films-container")
const input_busca = document.querySelector("#input-busca")
const button = document.querySelector("#button-busca")

window.onload = function () {

    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=796ab2c7&s=Batman")
        .then(async (data) => {

            const response = await data.json();
            console.log(response.Search);
            
            response.Search.forEach(element => {

                const div = document.createElement("div");
                div.classList.add("film-card");

                const poster = document.createElement("img");
                poster.setAttribute("src", `${element.Poster}`);

                const p = document.createElement('p');
                p.classList.add("film-title");
                p.innerText = element.Title

                div.appendChild(poster);
                div.appendChild(p);
                
                container.appendChild(div);

            });
            
        }).catch((error) => {
            console.log({ error })
            alert('Houve um erro ao coletar filmes')
        });
}

button.addEventListener('click', () => {

    document.querySelectorAll(".film-card").forEach(item => {
    container.removeChild(item);
    })

    document.querySelectorAll(".text-error").forEach(item => {
        container.removeChild(item);
    })

    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=796ab2c7&s=${input_busca.value}`)
        .then(async (data) => {

            const response = await data.json();
            console.log(response.Search);
            
            response.Search.forEach(element => {

                const div = document.createElement("div");
                div.classList.add("film-card");

                const poster = document.createElement("img");
                poster.setAttribute("src", `${element.Poster}`);

                const p = document.createElement('p');
                p.classList.add("film-title");
                p.innerText = element.Title

                div.appendChild(poster);
                div.appendChild(p);
                
                container.appendChild(div);

            });
            
        }).catch((error) => {
             
            console.log({ error })

            const p = document.createElement('p');
            p.classList.add("text-error");
            p.innerText = `Não foi possível encontrar o filme "${input_busca.value}"`;
            
            container.appendChild(p);
        });
    
})

