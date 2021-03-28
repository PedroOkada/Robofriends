//import react from 'react';


const Card =({ nome , email , id}) => {
    
    return(
        
        <div className = 'tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'>
            <img alt = 'foto' src= {`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{nome}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card