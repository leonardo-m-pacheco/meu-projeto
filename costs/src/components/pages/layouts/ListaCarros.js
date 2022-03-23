import React from 'react';
import axios from 'axios'


export default class ListaCarros extends React.Component{

state={
    carros:[]
}


componentDidMount() {
    axios.get('http://localhost:5000/Menu-Pratos')
    .then(resp =>{
        this.setState({carros:resp.data})
        
    })
    
}


    render(){
        return(
            <div>
            {this.state.carros.map(carro =>(
                <ul key={carro.id}>
                    
                    <li><h5>pedido:{carro.id} - Nome do prato:</h5></li>
                    <li>{carro.name}</li>
                    
                    
                    </ul>
            ))}
            </div>
        )
    }
}
