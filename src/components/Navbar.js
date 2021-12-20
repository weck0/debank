import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return(
            <nav className='navbar navbar-dark fixed-top shadow p-0' style={{backgroundColor:'black', height:'50px'}}>
                <a className='navbar-brand col-sm3 col-md-2 mr-0' style={{color: 'white'}}>Debank Yield Farming (Decentralised Banking App)</a>
                <ul className='navbar-nav px-3'>
                    <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
                        <small style={{color: 'white'}}>ACCOUNT NUMBER:</small>
                    </li>
                </ul>

            </nav>
        )
    }
}

export default Navbar;