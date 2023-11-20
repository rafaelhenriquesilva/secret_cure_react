import {} from 'react'
import '../css/style.css'
import { productsMock } from '../mock/products.mock'
import CardHome from '../components/CardHome'

export default function Suplementos () {
    return(
        <>
        <h2 className='titulo_home'>Suplementos</h2>
        <CardHome products = {productsMock.suplementos}/>
        </>
    )
}