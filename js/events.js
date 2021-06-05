const url = "https://comscimus.kvistnes.one/wp-json/wc/store/products";
const container = document.querySelector(".events");
const loader = document.querySelector(".loader");

async function fetchEvents(){
    try{
        const search = await fetch(url);
        const eventsResults = await search.json();
        console.log(eventsResults);

        for(let i = 0; i < eventsResults.length; i++ ){
            console.log(eventsResults[i]);
            const category = eventsResults[i].categories[0].id;

            // If the category ID is not 20 (event category), continue.
            if(category !== 20){
                continue;
            }

            container.innerHTML += `
            <a href="exhibit.html?id=${eventsResults[i].id}">
                <div class="exhibition-item">
                    <div class="exhibit-text">
                        <img src="${eventsResults[i].images[0].thumbnail}" alt="${eventsResults[i].images[0].alt}">
                    </div>

                    <div class="right">
                        <h2>${eventsResults[i].name}</h2>
                        <hr>
                        <p>${eventsResults[i].short_description}</p>
                    </div>
                </div>
            </a>`;

            if(eventsResults){
                loader.style.display = "none";
            }
        }
    }
    
    catch(error){
        container.innerHTML = "Something went wrong. Try again later.";
    }

    finally{
        console.log("finally");
    }
}
fetchEvents()