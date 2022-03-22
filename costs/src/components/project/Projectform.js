import styles from './Projectform.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import Submitbuttom from '../form/Submitbuttom';

function Projectform({btnText}) {
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
            text='selecione a categoria'/>
              
                <Submitbuttom  text={btnText}/>
               
            
        </form>
     );
}

export default Projectform;