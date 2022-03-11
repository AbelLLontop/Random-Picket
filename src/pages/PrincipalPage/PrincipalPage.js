import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ListContext from '../../Contexts/listsProvider';
import './PrincipalPage.css'

export default function PrincipalPage() {

    const [lists, setLists] = useState({ listA: [], listB: [] });
    const {setLista} = useContext(ListContext);
    const navigation = useNavigate();


    const separarCadena = (cadena) => {
        let cadenaSeparada = cadena.split('\n\n');
        let cadenaA = cadenaSeparada[0]; 
        let cadenaB = "";

        if (cadenaSeparada.length >= 2) {
            cadenaB = cadenaSeparada[1];
        }
        const listaA = cadenaA.split('\n').filter(value => value.match(/[A-Za-z0-9-]+/gi) !== null);
        const listaB = cadenaB.split('\n').filter(value => value.match(/[A-Za-z0-9-]+/gi) !== null);
        setLista({listaA,listaB})
        return { listaA, listaB };
    }

    const handleTextArea = (e) => {
        const cadena = e.target.value;
        const { listaA, listaB } = separarCadena(cadena);
        setLists({listA:listaA,listB:listaB})
    }
    const ejecutar = ()=>{
        setLista({listaA:lists.listA,listaB:lists.listB})
        navigation('/ejecutado');


    }

    const generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }
    return (
        <div className='principal-page'>
            <div className='options'>
                <div className="list A">
                    {lists.listA.map((valor,index) => (
                        <div key={index} className="element">
                            <span className='name'>{valor}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='content-principal'>
                <header>
                    <h1 className='title'><span>Random </span>Picket</h1>
                    <p className='description'>Digite los datos separandolos con un enter dentro del textarea. Para continuar con la sección dos digite dos veces enter, luego  continue digitando los valores separandolos con un enter. Una vez terminado dar click en iniciar.</p>
                </header>
                <div className="input-content">
                    <label htmlFor="text-area">
                        <span>Ingresar Datos</span>
                        <textarea id='text-area' onChange={(e) => handleTextArea(e)} className='text-area'>
                        </textarea>
                    </label>
                </div>
                <div className="buttons-content">
                    <div className="buttons">
                        <button className='btn skye' onClick={()=>ejecutar()}>Iniciar</button>
                    </div>
                </div>

            </div>
            <div className='options'>
                <div className="list B">
                    {lists.listB.map((valor,index) => (
                        <div key={index} className="element">
                            <span  className='name'>{valor}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
