import {} from 'react'
import '../css/style.css'
import { productsMock } from '../mock/products.mock'
import CardHome from '../components/CardHome'

export default function Medicamentos () {
    return(
        <>
        <h2 className='titulo_home'>Medicamentos</h2>
        <CardHome products = {productsMock.medicamentos}/>
        </>
    )
}