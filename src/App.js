import React from 'react';
import { CardList } from './components/card-list/card-list';
import './App.css';
import SearchBox from './components/search-box/search-box';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    handleChange = e => {
        this.setState({ searchField: e.target.value });
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(users => this.setState({ monsters: users }));
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox
                    placeholder="Search for a monster"
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
