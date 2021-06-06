const container = document.querySelector(".exhibit-content");
const title = document.querySelector("title");
const headerImage = document.querySelector(".header-image");
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");
console.log(id);

const pageUrl = `https://comscimus.kvistnes.one/wp-json/wc/store/products/${id}`;

async function getContent(){
    try {
        const search = await fetch(pageUrl);
        const result = await search.json();
        console.log(result);

        title.innerHTML = result.name;

        if (result.id !== 59){
            container.innerHTML = `
            <h1>${result.name}</h1>
            <p>${result.description}</p>`;

            headerImage.style.backgroundImage = `url(${result.images[1].src})`;
        } else {
            headerImage.style.backgroundImage = `url(${result.images[0].src})`;

            container.innerHTML = `
            <h1>${result.name}</h1>
            <p>${result.description}</p>
            
            <form class="night-form form-back">
            <h2>Sign up for a Night in the Museum</h2>
            <ul>
              <li class="night-list">For kids from the age of 6</li> 
              <li class="night-list">Bring your own sleeping bag</li>
            </ul>
            <div class="block-form">
              <label class="block-form" for="name">Name*</label>
              <small>Error message</small>
              <input class="block-form" type="text" id="name">
            </div>
            <div class="block-form">
              <label class="block-form" for="email">E-mail*</label>
              <small>Error message</small>
              <input class="block-form" type="email" id="email">
            </div>
            <div class="block-form">
              <label class="block-form" for="text">Who's coming along? How many kids (6-12y/o), youths (13-17y/o) and adults (18y/o and older).</label>
              <small>Error message</small>
              <textarea class="message" placeholder="Ex.. 2 kids, 1 youth and 2 adults" id="text" rows="4"></textarea>
            </div>
            <div class="block-form">
              <input type="radio" name="date" id="04/01-05/01">
              <label for="04/01-05/01">04/01-05/01</label>
            </div>
            <div class="block-form">
              <input type="radio" name="date" id="20/01-21/01">
              <label for="20/01-21/01">20/01-21/01</label>
            </div>
            <div class="block-form">
              <input type="radio" name="date" id="07/02-08/02">
              <label for="07/02-08/02">07/02-08/02</label>
            </div>
            <div class="block-form">
              <input type="radio" name="date" id="26/02-27/02">
              <label for="26/02-27/02">26/02-27/02</label>
            </div>
            <div class="block-form">
              <input type="radio" id="over18">
              <label for="over18">I am 18 years or older</label>
            </div>
            <button class="signup-night">Sign up</button>
          </form>`;
        } 
    }
    catch(error) {
        console.log(error);
        container.innerHTML = `<h2>Oops.. Something went wrong!</h2>`;
    }
    finally {
        console.log("finally");
    }
}
getContent();
