import React from 'react'
import {Link, NavLink} from "react-router";
import {sidebarItems} from "~/constants";
import {cn} from "../lib/utils";

const NavItems = ({handleClick}: {handleClick?: ()=> void}) => {
    return (
        <section className="nav-items">
            <Link to="/" className="link-logo">
                <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]"/>
                <h1>Tourvisto</h1>
            </Link>

            <div className="container">
                <nav>
                    {sidebarItems.map(({id, href, icon, label})=>(
                        <NavLink to={href} key={id}>
                            {({isActive}: {isActive:boolean})=>(
                                <div className={cn('group nav-item', {
                                    'bg-primary-100 !text-white': isActive
                                })} onClick={handleClick}>
                                    <img
                                    src={icon}
                                    alt={label}
                                    className={`group-hover: brightness-0 size-5 group-hover:invert
                                    ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`}
                                    />
                                    {label}
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>
                <footer className="nav-footer">Hello
                <article>Hi</article>
                    <button onClick={()=>{console.log('logout')}}
                            className="cursor-pointer">Logout
                        <img src="/assets/icons/logout.svg"
                        alt="Logout"
                        className="size-6"
                        />
                    </button>
                </footer>
            </div>
        </section>
    )
}
export default NavItems
