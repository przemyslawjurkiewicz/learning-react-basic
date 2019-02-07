var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: './img/poter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: './img/lew.jpg'
    },
    {
        id: 3,
        title: 'Batman',
        desc: 'Film na podstawie komiksów DC Comics',
        img: './img/batman.jpg'
    },
    {
        id: 4,
        title: 'Breaking Bad',
        desc: 'Serial o nuczycielu chemii',
        img: './img/braking.jpg'
    }
];

var moviesElelments = movies.map(function (movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', { src: movie.img, alt: movie.title })
    );
});


var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElelments)
);



ReactDOM.render(element, document.getElementById('app'));
