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


var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('h2', {}, this.props.title
        )
    },
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('p', {}, this.props.desc
        )
    },
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('img', { src: this.props.image }
        )
    },
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return React.createElement('li', {key: this.props.movie.id},
            React.createElement(MovieTitle, { title: this.props.movie.title }),
            React.createElement(MovieDescription, { desc: this.props.movie.desc }),
            React.createElement(MovieImage, { image: this.props.movie.img })
        );
    },
});


var MovieList = React.createClass({
    render: function () {
        var moviesElelments = movies.map(function (movie) {
            return React.createElement(Movie, { movie: movie }
            );
        });
        return React.createElement('ul', {}, moviesElelments)
    }
})

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
);

ReactDOM.render(element, document.getElementById('app'));
