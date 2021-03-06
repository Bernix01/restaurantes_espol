import React from 'react'
import {Link} from 'react-router'

import Header from './Header'
import Footer from './Footer'
import Factura from './FacturaForm'

export default class ModificarFactura extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div>
                <Header page={this.props.location.pathname}/>
                <div class="main container-fluid">    
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <h1>Modificar Factura</h1>
                            <Factura fid={this.props.match.params.id} update/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    } 
}