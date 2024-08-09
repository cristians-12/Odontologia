import Image from 'next/image'
import React from 'react'
import logo from '/public/tooth.png';

const Navbar = () => {
    return (
        <nav className='flex md:px-10 justify-between items-center py-5 w-[100v]'>
            <figure className='flex items-center gap-5'>
                <Image src={'/tooth.png'} width={50} height={50} alt='logo' priority />
                <h2 className='font-extrabold'>Odontologia integral</h2>
            </figure>
            <ul className='md:flex hidden items-center gap-20'>
                <li className="hover:font-bold">Inicio</li>
                <li className="hover:font-bold">Servicios</li >
                <li className="hover:font-bold">Nosotros</li>
                <li className="hover:font-bold">Contacto</li>
            </ul>

            <button className='border-2 hidden md:block border-cyan-500 px-10 py-3 rounded-lg text-cyan-700 font-bold'>
                Saca tu turno
            </button>
            <figure className='block md:hidden w-10'>
                <svg fill='blue' xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32" />
                </svg>
            </figure>
        </nav>
    )
}

export default Navbar