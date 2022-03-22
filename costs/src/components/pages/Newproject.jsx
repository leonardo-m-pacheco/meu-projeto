
import styles from './Newproject.module.css'
import Projectform from '../project/Projectform';
function Newproject() {
    return ( 
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <Projectform btnText="Criar projeto"/>
        
        </div>
     );
}

export default Newproject;