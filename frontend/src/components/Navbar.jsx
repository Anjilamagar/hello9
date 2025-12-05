import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center ">
                <img src="images\logo.png" className="w-40 cursor-pointer" alt="not supported" />
                <ul className="flex-1 text-center">
                    <li className="list-none inline-block px-5"><a href="#" className="no-underline text-white px-2">Home</a>
                    </li>
                    <li className="list-none inline-block px-5"><a href="#" className="no-underline text-white px-2">About</a>
                    </li>
                    <li className="list-none inline-block px-5"><a href="#" className="no-underline text-white px-2">Features</a>
                    </li>
                    <li className="list-none inline-block px-5"><a href="#" className="no-underline text-white px-2">Contact</a>
                    </li>
                </ul>
                <img src="images\cart.png" className="w-8 cursor-pointer" alt=" not supported" />
            </nav>
        </div>
    )
}

export default Navbar
