import styles from '../form/Submitbuttom.module.css'

function Submitbuttom({text}) {
    return ( 
        <div>
           <button className={styles.btn}>{text}</button>
        </div>
     );
}

export default Submitbuttom;