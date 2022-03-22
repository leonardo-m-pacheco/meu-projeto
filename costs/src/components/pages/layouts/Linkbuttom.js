import {Link} from 'react-router-dom'
import styles from './Linkbuttom.module.css';

function Linkbuttom({to, text}) {
    return ( 
        <Link className={styles.btn}to = {to}>
        {text}
        </Link>
     );
}

export default Linkbuttom;