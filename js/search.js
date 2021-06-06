const exhibitionsUrl = "https://comscimus.kvistnes.one/wp-json/wc/store/products";
const container = document.querySelector(".search-results");
const searchBar = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");

async function fetchContent(){
    try{
        const search = await fetch(exhibitionsUrl);
        const results = await search.json();

        function showResults(contentArray){
            container.innerHTML = "";
            contentArray.forEach(function(result){
                container.innerHTML += `
                    <a href="exhibit.html?id=${result.id}" class="search-result_item">
                        <img src="${result.images[0].thumbnail}" alt="${result.images[0].alt}">
                        <h2>${result.name}</h2>
                        <p>${result.short_description}</p>
                    </a>`;  
            });
        }

        showResults(results);

        function checkSearchValue(result){
            return result.name.includes(searchBar.value);
        }

        searchButton.onclick = function filterContent(){
            container.style.display = "block";
            const newResults = results.filter(checkSearchValue);
            showResults(newResults);
        }
    }
    
    catch(error){
        container.innerHTML = "Something went wrong. Try again later.";
        console.log(error);
    }

    finally{
        console.log("finally");
    }
}
fetchContent()

