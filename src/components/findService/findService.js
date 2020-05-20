import React from 'react';
import ServicePortal from './servicePortal/servicePortal.js';
import './findService.css';



class findService extends React.Component {
    
    constructor(props) {
        super();

        this.state = {
            societyName: '',
            portalroute: 'findService',
            card: [],
            card_shop: []
        }
    }

    onSocietyNameChange = (event) => {
        this.setState({societyName: event.target.value});
    }

    portalRouteChange = (portalroute) => {
        this.setState({portalroute: portalroute});
    }


    onSocietySubmit = () => {
        fetch('https://sleepy-castle-14535.herokuapp.com/findService', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                societyName: this.state.societyName
            })
        })
        .then(response => response.json())
        .then(this.portalRouteChange('portalroute'))
        .then(card => {
            this.setState(Object.assign(this.state.card, {card: card}))
    })
    console.log(this.state.card)
}


    onShopSubmit = () => {
        fetch('https://sleepy-castle-14535.herokuapp.com/findShop', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                societyName: this.state.societyName
            })
        })
        .then(response => response.json())
        .then(this.portalRouteChange('portalroute'))
        .then(card_shop => {
            this.setState(Object.assign(this.state.card_shop, {card_shop: card_shop}))
        })
        console.log(this.state.card_shop);
    }


    render(){
        return(
        this.state.portalroute === 'findService'
        ?
        <div className = 'findservice pt6 pb6'>

            <main class="pa2 pt4 black-80">
                <div className="measure center form pa4 br3 shadow-2">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend style = {{color: 'black'}} className="f2 fw6 ph0 mh0 pa3">Find Services in Your Area</legend>

                        <div class="mt3">
                            <label style = {{color: 'black'}} className="db fw6 lh-copy f6" htmlFor="email-address">Please Enter a Society</label>
                            <input onChange = {this.onSocietyNameChange} className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="pa4">
                            <input style = {{color: 'black'}} onClick = {() => {this.onSocietySubmit(); this.onShopSubmit()}} className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib form button" type="submit" value="Submit"/>
                            <p  onClick = {() => this.props.onRouteChange('home')} style = {{flex: 'flex', justifyContent: 'start', color: 'black'}} className = 'b ph3 pv2 input-reset ba b--white bg-blue grow pointer f6 dib form button'>Home</p>
                        </div>
                    </fieldset>
                </div>
            </main>
        </div>
        : (
            this.state.portalroute === 'portalroute'
            ? <ServicePortal card = {this.state.card} card_shop = {this.state.card_shop} portalRouteChange = {this.portalRouteChange} onRouteChange = {this.props.onRouteChange}/>
            : null
            
        )
    );
}
    
}

export default findService;