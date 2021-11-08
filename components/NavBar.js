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

                        

                        <div class="nav-links-div">
                            <Link href="/"  >
                                <a className="navbar-links links">Home</a>
                            </Link>

                            <Link href="/about" >
                                <a className="navbar-links links">About Me</a>
                            </Link>

                            <Link href="https://jeans-journal.herokuapp.com/" className="links">
                                <a className="navbar-links links" target="blank">Blog</a>
                            </Link>

                        </div>

                        

                        
                        

                    
                    
                    
                </div>

                

              
          

            

            
            
            
        
    )
}
