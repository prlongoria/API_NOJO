const requestURL = "../json/peliculas.json";

async function fetchMoviesJSON() {
  const response = await fetch(requestURL);
  const movies = await response.json();
  return movies;
}

fetchMoviesJSON().then((movies) => {
  for (let index = 0; index < movies.peliculas.length; index++) {
    const moviesSection = document.getElementById("moviesSection");
    let id = movies.peliculas[index].id;
    let title = movies.peliculas[index].nombre;
    let director = movies.peliculas[index].director;
    let gender = movies.peliculas[index].clasificacion;
    let img = movies.peliculas[index].caratula;
    let button = movies.peliculas[index].info;
  
    moviesSection.innerHTML += `
        <div class="card-group">          
            <div class="col-md-6 col-sm-6">
              <div class="card ml-5 text-center bg-transparent border-0 col-md-6" style= "width: 20rem;">
                <img src="${img}" class="figure-img img-fluid rounded" alt="..." id="image">
                <div class="card-body">                    
                  <h1 class="card-title">${id}. ${title}</h1>
                  <h3 class="card-text" id="text">${director}</h3>
                  <h4 class="card-text" id="text">${gender}</h4>
                  <a href="${button}" class="btn btn-primary">Info</a>
                </div>
              </div>
            </div>          
        </div>                 
       `;
  }
});


function initAnimation(){
  document.getElementById('news').className ='animacion';
}

function endAnimation(){
   document.getElementById('news').className ='';
}