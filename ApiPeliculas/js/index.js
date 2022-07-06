const requestURL = "../json/peliculas.json";

async function fetchMoviesJSON (){
    const response = await fetch (requestURL);
    const movies = await response.json();
    return movies;

}

fetchMoviesJSON().then(movies => {
    for (let index = 0; index < movies.peliculas.length; index ++) {
        const moviesSection = document.getElementById('moviesSection');
        let id = movies.peliculas[index].id;
        let title = movies.peliculas[index].nombre;
        let director = movies.peliculas[index].director;
        let gender = movies.peliculas[index].clasificacion;
        let img = movies.peliculas[index].caratula;

        moviesSection.innerHTML += `
        <div class="card-group">
    <div class="row">
    <div class="col-md-6 col-sm-6">
        <div class="card ml-5 text-center bg-transparent border-0 col-md-6" style= "width: 20rem;">
          <img src="${img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${id}. ${title}</h5>
            <p class="card-text"></p>
            <p class="card-text">${director} - ${gender}<small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
    </div>
    </div>
        </div>

        <div class="col-md-6 col-sm-6"
        <div class="card ml-5 text-center bg-transparent border-0 d-flex col-md-6" style= "width: 20rem;">
          <img src="${img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${id}. ${title}</h5>
            <p class="card-text"></p>
            <p class="card-text">${director} - ${gender}<small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
          </div>
        </div>
        
        <div class="col-md-6 col-sm-6"
        <div class="card ml-5 text-center bg-transparent border-0 d-flex col-md-6" style= "width: 20rem;">
          <img src=${img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${id}. ${title}</h5>
            <p class="card-text"></p>
            <p class="card-text">${director} - ${gender}<small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
          </div>
        </div>
      </div>                  
            
        `
        
    };

})
