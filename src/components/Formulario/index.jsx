import { useEffect, useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [valores, setValores] = useState(false);


    useEffect (() => {
        if (peso, altura > 0 ) {
            setValores(true);
        }

    }, [peso, altura])

    const calculaImc = () => {
        const novaAltura = altura / 100;
        const alturaElevada = novaAltura * novaAltura;
        const imc = (peso / alturaElevada).toFixed(2);
        
        if (isNaN(imc)) {
            return "Digite os campos corretamente para obter o resultado"
        } else {
            return `O resultado do seu IMC: ${imc}`
        }
    }



    return (
        <form className={styles.form}>
            <label className={styles.item}>Digite seu peso:</label>
            <input className={styles.item} type="number" placeholder='KG' onChange={({ target }) => setPeso(parseInt(target.value))} />
            <label className={styles.item}>Digite sua altura em centimetros:</label>
            <input className={styles.item} type="number" placeholder='CM' onChange={({ target }) => setAltura(parseInt(target.value))} /> 
            {valores && (
                <h2 className={styles.resultado}>{calculaImc()}</h2>
            )}
        </form>
    )
}


export default Formulario