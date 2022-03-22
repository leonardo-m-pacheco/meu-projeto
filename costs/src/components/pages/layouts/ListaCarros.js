import React from 'react';
import axios from 'axios'


export default class ListaCarros extends React.Component{

state={
    carros:[]
}


componentDidMount() {
    axios.get('https://apireact.leonardomarqu15.repl.co/')
    .then(resp =>{
        this.setState({carros:resp.data})
        
    })
    
}


    render(){
        return(
            <div>
            {this.state.carros.map(carro =>(
                <div key={carro.id}>{carro.id} - {carro.marca} - {carro.Modelo}</div>
            ))}
            </div>
        )
    }
}
