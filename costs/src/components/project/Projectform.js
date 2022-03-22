import {useState, useEffect} from 'react'
import styles from './Projectform.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import Submitbuttom from '../form/Submitbuttom';


function Projectform({btnText}) {

    const[categories, setCategories] = useState([])

    useEffect(() =>{
    fetch("http://localhost:5000/categories",{
        method:'get',
        headers:{
            'Contente-Type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))
    },[])

    
    return ( 
        <form className={styles.form}>
           
            <Input 
            type='text'
            text="nome do Projeto"
            name="name"
            placeholder="Insira o nome do projeto"/>
           
            <Input  
            type='number'
            text="Orçamento do Projeto"
            name="name"
            placeholder="Insira o orçamento total"/>
           
            <Select  name='category_id' 
            text='selecione a categoria'
            options={categories}
            />
              
                <Submitbuttom  text={btnText}/>
               
            
        </form>
     );
}

export default Projectform;