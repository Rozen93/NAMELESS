"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react';
import Image from 'next/image';


function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };



    const links = [
        {
            title: "Inicio",
            path: "/",
        },
        {
            title: "Produccion Audiovisual",
            path: "/produccion-audiovisual",
        },
        {
            title: "Desarrollo Web",
            path: "/desarrollo-web",
        },
        {
            title: "Branding y Marketing",
            path: "/branding-y-marketing",
        },
        {
            title: "Blog",
            path: "/blog",
        }
    ];

    return (
        <>
            <header>
                <div className="rino_logo">
                    <Link href="/">
                        <div className=' flex items-center'>
                            <div className='relative h-[52.83px] w-[70px]'>
                                <Image src="/rhino.png" alt='' fill />
                            </div>
                            {/* <img style={{ maxWidth: '70px' }} className="mr-2" src="rhino.png" alt="productora audiovisuales - logo" /> */}
                            <div className='brand ml-2'>RHINO</div>
                        </div>
                    </Link>

                    <section className="componente00">
                        <input type="checkbox" id="active" checked={menuOpen} onChange={toggleMenu} />
                        <label htmlFor="active" className="menu-btn"><i className="fas fa-bars"></i></label>

                        <div className="wrapper" id="mask">
                            <ul className="menu">
                                {links.map(link => (
                                    <li key={link.path} onClick={() => setMenuOpen(false)}
                                    ><Link href={link.path} key={link.path}>{link.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </section>
                </div>
            </header>
        </>
    )
}

export default Navbar