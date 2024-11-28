document.addEventListener('DOMContentLoaded', () => {
    const vehicleContainer = document.getElementById('vehicle-container');

    // URL de la API de Star Wars
    const apiUrl = 'https://swapi.dev/api/vehicles/';

    // Función para obtener los vehículos de la API
    const fetchVehicles = async () => {
        try {
            let response = await fetch(apiUrl);
            let data = await response.json();

            // Recorrer los vehículos y crear un contenedor para cada uno
            data.results.forEach(vehicle => {
                // Crear un div contenedor para cada vehículo
                const vehicleDiv = document.createElement('div');
                vehicleDiv.classList.add('vehicle-div');  // Clase para cada contenedor de vehículo

                // Crear la tarjeta de vehículo
                const vehicleCard = document.createElement('div');
                vehicleCard.classList.add('vehicle-card');

                // Crear el contenido de la tarjeta
                vehicleCard.innerHTML = `

                    <div class="card mb-3 ">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${urlImgVehiculo(vehicle.name)}"
                                    class="img-fluid rounded-start" alt="${vehicle.name}"
                                    onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200';">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${vehicle.name}</h5>
                                    <p class="card-text"><strong>Model:</strong> ${vehicle.model}</p>
                                    <p class="card-text"><strong>Manufacturer:</strong> ${vehicle.manufacturer}n</p>
                                    <p class="card-text"><strong>Cost in credits:</strong> ${vehicle.cost_in_credits}</p>
                                    <p class="card-text"><strong>Max speed:</strong> ${vehicle.max_atmosphering_speed}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Agregar la tarjeta al div contenedor
                vehicleDiv.appendChild(vehicleCard);

                // Agregar el div contenedor al contenedor principal
                vehicleContainer.appendChild(vehicleDiv);
            });
        } catch (error) {
            console.error('Error fetching data from the API:', error);
        }
    };

    // Llamar a la función para obtener los vehículos
    fetchVehicles();
});


function urlImgVehiculo(nombre){
    if(nombre=="Sand Crawler"){
        return "https://starwars-visualguide.com/assets/img/vehicles/4.jpg"
    }else if(nombre=="T-16 skyhopper"){
        return "https://starwars-visualguide.com/assets/img/vehicles/6.jpg"
    }else if(nombre=="X-34 landspeeder"){
        return "https://starwars-visualguide.com/assets/img/vehicles/7.jpg"
    }else if(nombre=="TIE/LN starfighter"){
        return "https://diceandcardboard.com/content/images/2022/06/7D447526-4083-44FC-BAAD-FEBA5A3872B0.jpeg"
    }else if(nombre=="Snowspeeder"){
        return "https://starwars-visualguide.com/assets/img/vehicles/14.jpg"
    }else if(nombre=="TIE bomber"){
        return "https://starwars-visualguide.com/assets/img/vehicles/16.jpg"
    }else if(nombre=="AT-AT"){
        return "https://static.posters.cz/image/1300/posters/star-wars-at-at-attack-i67847.jpg"
    }else if(nombre=="AT-ST"){
        return "https://starwars-visualguide.com/assets/img/vehicles/19.jpg"
    }else if(nombre=="Storm IV Twin-Pod cloud car"){
        return "https://starwars-visualguide.com/assets/img/vehicles/20.jpg"
    }else if(nombre=="Sail barge"){
        return "https://starwars-visualguide.com/assets/img/vehicles/24.jpg"
    }else if(nombre==""){
        return ""
    }
}