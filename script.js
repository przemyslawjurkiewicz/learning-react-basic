var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {},
        React.createElement('li', {},
            React.createElement('h2', {}, 'Harry Potter'),
            React.createElement('p', {}, 'Film o czarodzieju')
        ),
        React.createElement('li', {},
            React.createElement('h2', {}, 'Król lew'),
            React.createElement('p', {}, 'Film o królu sawanny')
        )
    )
);



ReactDOM.render(element, document.getElementById('app'));
