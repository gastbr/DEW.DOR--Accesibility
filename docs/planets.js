// script.js
document.addEventListener("DOMContentLoaded", () => {
    // URL de la API de Star Wars
    const apiUrl = "https://swapi.dev/api/planets/";

    // Función para cargar los planetas desde la API
    const loadPlanets = async () => {
        try {
            let response = await fetch(apiUrl);
            let data = await response.json();
            displayPlanets(data.results);
        } catch (error) {
            console.error("Error al cargar los planetas:", error);
        }
    };

    // Función para mostrar los planetas en la página
    const displayPlanets = (planets) => {
        const planetsContainer = document.getElementById("planets-container");

        planets.forEach(planet => {
            const card = document.createElement("div");
            card.classList.add("card");

            // Crear la estructura del contenido de la carta
            const cardContent = `
 
                <div class="card-body">
                    <h5 class="card-title">${planet.name}</h5>
                    <p class="card-text">Clima: ${planet.climate}</p>
                    <p class="card-text">Terreno: ${planet.terrain}</p>
                    <p class="card-text">Población: ${planet.population}</p>

                </div>
            `;
            
            card.innerHTML = cardContent;
            planetsContainer.appendChild(card);
        });
    };

    // Cargar los planetas al iniciar
    loadPlanets();
});
