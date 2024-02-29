import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";


export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [ {
        name: "Home",
        href: "/",
    },
    {
        name: "Booking",
        href: "/booking",
    },
    ];


    return (
        <header>

            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarBrand>
                        <p className="font-bold text-inherit text-amber-700 font-montserrat antialiased text-2xl">StoredIn</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {menuItems.map((item, index) => ( <NavbarItem> <Link color="foreground" href="#"><NavLink key={`${item.name}-${index}`} to={item.href}> {item.name} </NavLink></Link> </NavbarItem>))}
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            <NavLink to="/">Home</NavLink>
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            <NavLink to="/booking">Booking</NavLink>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat" className='hidden lg:flex'>
                            Sign Up
                        </Button>
                    </NavbarItem>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden text-amber-600 font-black thick-line"
                    />
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item.name}-${index}`}>
                            <NavLink
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                to={item.href}
                                size="lg"
                            >
                                {item.name}
                            </NavLink>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>

        </header>
    )
}
