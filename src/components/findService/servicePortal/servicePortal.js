import React from 'react';
import Card from './card/card.js';
import './servicePortal.css';
import Card_Shop from './card_shop/card_shop.js';


class servicePortal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            optionRoute: 'resident'
        }
    }

    onOptionClick = (optionRoute) => {
        this.setState({optionRoute: optionRoute})
    }

    render(){
        const {card, card_shop} = this.props;
        const cardArray = card.map(
            (user,i) => {
                return (
                    <Card key = {i}
                    kind = {card[i].kind}
                    email = {card[i].email}
                    phone = {card[i].phone}
                    society = {card[i].society}
                    description = {card[i].description}/>
                );
            })
    
            const cardArrayShop = card_shop.map(
                (user,i) => {
                    return (
                        <Card_Shop key = {i}
                        type = {card_shop[i].type}
                        delivery_type = {card_shop[i].delivery_type}
                        contact = {card_shop[i].contact}
                        shop_name = {card_shop[i].shop_name}
                        society_name = {card_shop[i].society_name}
                        description = {card_shop[i].description}/>
                    );
                })

            return(
                <div className = 'port'>
                    <p onClick = {() => this.props.onRouteChange('home')} style = {{flex: 'flex', justifyContent: 'start'}}className = 'b ph3 pv2 input-reset ba b--white bg-blue grow pointer f3 dib form button pa4 br3 ml3'>Home</p>
    
                    <p className = 'title f1 ma0 b'>Services Available in Your Society</p>
    
                    <div className ='serviceOptions bb bw2 b--black' style = {{display: 'flex', marginLeft: '20px'}}>
                        <p onClick = {() => this.onOptionClick('resident')} className = ' b ph3 pv2 input-reset ba b--white bg-blue grow pointer f3 dib form button pa4 br3 b--white option mr2'>Homes Near You</p>
                        <p onClick = {() => this.onOptionClick('shops')} className = 'b ph3 pv2 input-reset ba b--white bg-blue grow pointer f3 dib form button pa4 br3 b--white option ml2'>Shops Near You</p>
                    </div>
                    <div style = {{textAlign: 'center'}}>
                    {
                        this.state.optionRoute === 'shops'
                        ? <div >
                            {cardArrayShop}
                            </div>
                        : <div>
                            {cardArray}
                            </div>
                    }
                    </div>
                    
                </div>
            )
    }
    
}

    
        
   

        
        
        
  

export default servicePortal;

