//import react from 'react';
//import {Nomes} from './Nomes';
import Card from './Card';

const CardList = ({Nomes}) => {
    
        return(
            <div>
                {
                    Nomes.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={Nomes[i].id} 
                            nome={Nomes[i].name} 
                            email={Nomes[i].email}
                        />
                    )
                    })
                }
            </div>
        )
}
export default CardList