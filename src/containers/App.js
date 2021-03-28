// import React , {Component}  from 'react';
import React , {useState , useEffect}  from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

// class App extends Component {
function App () {
    
    // constructor(){
    //     super()
    //     this.state ={
    //         Nomes: [],
    //         searchfield: '' 
    //     }
    // }
    const [Nomes, setNomes] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({Nomes: users}))
            
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setNomes(users))  
    }
    ,[])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

       
    const filteredRobots = Nomes.filter(Nome =>{
        return Nome.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    
        return !Nomes.length ?
            <h1>Loading</h1>:
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <button onClick={() => setCount(count + 1)}>Click Me!</button>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList Nomes ={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    
    
}

export default App;