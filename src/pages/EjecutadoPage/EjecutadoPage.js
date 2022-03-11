import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ListContext from '../../Contexts/listsProvider'
import './EjecutadoPage.css';
export default function EjecutadoPage() {
    const { lista } = useContext(ListContext);
    const [listaPar, setListaPar] = useState([])
    const [loading, setLoading] = useState(true)
    const generateAleatorioArray = (arrInput = []) => {
        let arr = [...arrInput];
        for (let i = arr.length - 1; i > 0; i--) {
            let index = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[index]] = [arr[index], arr[i]];
        }
        return arr;
    }


    useEffect(() => {
        let a = generateAleatorioArray(lista.listaA);
        let b = generateAleatorioArray(lista.listaB);
        if (a.length > b.length) {
            let diferencia = a.length - b.length;
            for (let i = 0; i < diferencia; i++) {
                b.push('sin pareja')
            }
        } else if (a.length < b.length) {
            let diferencia = b.length - a.length;
            for (let i = 0; i < diferencia; i++) {
                a.push('sin pareja')
            }
        }
        let size = a.length;
        let objetoFinal = [];
        for (let i = 0; i < size; i++) {
            let objAux = {
                a: a[i],
                b: b[i]
            }
            objetoFinal.push(objAux);
        }
        const intervalo = setTimeout(()=>{
            setLoading(false);
            setListaPar(objetoFinal);
        },1000)


        return (()=>{
            clearInterval(intervalo);
        })


    }, [lista])

    return (
        <div className='ejecutado-page'>

            <div className='content-principal'>
                <header>
                    <h1 className='title'><span>Random </span>Picket</h1>
                    <p className='description'>Los valores se emparejaron de manera aleatoria y los datos que no tuvieron un par disponible se le mostrara con un mensaje de "no tiene pareja"</p>
                </header>
                <div className="parejas">
                    <div className='options'>
                {loading&&(<h2>Emparejando Valores</h2>)}
                        {listaPar.map((valor,index) => (
                            <div key={index} className='item-par'>
                                <div className="list A">
                                    <div className="element">
                                        <span className='name'>{valor.a}</span>
                                    </div>
                                </div>
                                <div className="list B">
                                    <div className="element">
                                        <span className='name'>{valor.b}</span>
                                    </div>
                                </div>
                            </div>


                        ))}




                    </div>

                </div>
                <div className="buttons-content">
                    <div className="buttons">
                        <button className='btn'>descargar</button>
                        <Link className='btn' to="/">volver</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
