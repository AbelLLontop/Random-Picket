import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { ListProvider } from '../Contexts/listsProvider'
import EjecutadoPage from '../pages/EjecutadoPage/EjecutadoPage'
import PrincipalPage from '../pages/PrincipalPage/PrincipalPage'

export default function AppRoute() {
    return (
        <>
            <ListProvider>
                <Routes>


                    <Route path="/" element={<PrincipalPage />} />
                    <Route path='/ejecutado' element={<EjecutadoPage/>} />



                    <Route path='/404' element={<h1>Esta pagina no existe</h1>} />
                    <Route path='*' element={<Navigate replace to="/404" />} />

                </Routes>
            </ListProvider>
        </>
    )
}
