const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


var request = new XMLHttpRequest();


request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {

    var data = JSON.parse(this.response);

    if (request.status = 200) {

        data.forEach(movie => {

            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const h4 = document.createElement('h4');
            h4.textContent = movie.director;
            
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`;
            
            container.appendChild(card);

            card.appendChild(h1);
            card.appendChild(h4);
            card.appendChild(p);

        })
        
    } else {
        
        console.log('olmadı');

    }



}

request.send();