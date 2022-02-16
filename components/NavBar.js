import Link from "next/link";
import React, { useState } from 'react'

import {useColorMode, Switch, Flex, Button, IconButton} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function NavBar() {
    return (
          
                <div className="navbar" >
                                

                        <div className="log-div">
                            <Link href="/"> 
                                <a className="logo">JN</a>
                                
                            </Link>
                        </div>         

                        

                        <div className="nav-links-div">
                            <Link href="/"  >
                                <a className="navbar-links links">Home</a>
                            </Link>

                            <Link href="/about" >
                                <a className="navbar-links links">About Me</a>
                            </Link>

                            <a className="navbar-links links"
                                href="/files/Jean-CV.pdf"
                                alt="alt text"
                                target="_blank"
                                rel="noopener noreferrer"
                            >CV</a>

                           

                            <Link href="/blog" className="links">
                                <a className="navbar-links links">Blog</a>
                            </Link>

                            




                            

                        </div>
                </div>        
        
    )
}
