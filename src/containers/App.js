import React , {Component}  from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
    constructor(){
        super()
        this.state ={
            Nomes: [],
            searchfield: '' 
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({Nomes: users}))
            
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
            
        
    }

    render()
    {
        const {Nomes, searchfield} = this.state;
        const filteredRobots = Nomes.filter(Nome =>{
            return Nome.name.includes(searchfield)
        })
        
            return !Nomes.length ?
        <h1>Loading</h1>:
        
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList Nomes ={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        
    }
}

export default App;