const exhibitionsUrl = "https://comscimus.kvistnes.one/wp-json/wc/store/products";
const container = document.querySelector(".exhibitions");
const loader = document.querySelector(".loader");

async function fetchExhibits(){
    try{
        const search = await fetch(exhibitionsUrl);
        const exhibitResults = await search.json();

        for(let i = 0; i < exhibitResults.length; i++ ){
            console.log(exhibitResults[i]);
            const category = exhibitResults[i].categories[0].id;

            
            // If the category ID is not 19 (exhibition category), continue.
            if(category !== 19){
                continue;
            }

            container.innerHTML += `
                <a href="exhibit.html?id=${exhibitResults[i].id}">
                    <div class="exhibition-item">
                        <img src="${exhibitResults[i].images[0].thumbnail}" alt="${exhibitResults[i].images[0].alt}">

                        <div class="exhibit-text">
                            <h2>${exhibitResults[i].name}</h2>
                            <hr>
                            <p>${exhibitResults[i].short_description}</p>
                        </div>
                    </div>
                </a>`;
            
            if(exhibitResults){
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
fetchExhibits()