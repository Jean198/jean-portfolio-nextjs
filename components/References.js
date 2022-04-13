import Link from "next/link";
import React, { useState } from 'react'

import {useColorMode, Switch, Flex, Button, IconButton} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function References() {
    return (
          
                <div >
                    <div className="projects-title">
                        <h3>References</h3>
                    </div>
                    <div className="References">
                    <div className="projects-title">
                            
                            </div>
                       
                            <div>
                                <h3 className="reference-name">Esko Ronkainen</h3><span> (CEO at Softrain Blobs Oy)</span>
    
                                <p>Email: esko.ronkainen@softrain.fi</p>
                                
                                
                                <p><a className="letter-of-recommendation"
                                    href="/files/Jeanharjoittelutodistus_allekirjoittu.pdf"
                                    alt="alt text"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >See my Letter of Recommendation from Softrain Blobs</a></p>
                            </div> <br /> <br />
                            <div>
                                <h3 className="reference-name">Jouni Huotari</h3><span> (Principal lecturer at JAMK and CEO at Nestronite)</span>
                                <p>Email: jouni.huotari@jamk.fi </p>
                                <p>Tel: +358408344615</p>
                                
                                
                            </div> <br /><br />
                            <div>
                                <h3 className="reference-name">Matti Mieskolainen</h3><span> ( Lehtori, Senior Lecturer at JAMK)</span>
                                <p>Email: matti.mieskolainen@jamk.fi</p>
                                <p>Tel: +358400444781</p>
                                
                                
                            </div>

                    </div>

                        
                    
                </div>
                   
        
    )
}
