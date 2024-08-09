import Image from 'next/image'
import React from 'react'
import logo from '/public/tooth.png';

const Navbar = () => {
    return (
        <nav className='flex px-10 justify-around items-center py-5'>
            <figure className='flex items-center gap-5'>
                <Image src={'/tooth.png'} width={50} height={50} alt='logo' priority />
                <h2 className='font-extrabold'>Odontologia integral</h2>
            </figure>
            <ul className='flex items-center gap-20'>
                <li>Inicio</li>
                <li>Servicios</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>

            <button className='border-2 border-cyan-500 px-10 py-3 rounded-lg text-cyan-700 font-bold'>
                Saca tu turno
            </button>
        </nav>
    )
}

export default Navbar