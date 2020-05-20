import React from 'react';
import PopUp from './popUp/popUp.js';
import './card_shop.css';
import medical from './medical.png';
import fruits from './fruits.png';
import groceries from './groceries.png';
import hygiene from './hygiene.png'

class CardShop extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showpopUp: false
        }
    }

    togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
    }  
        

    render(){
        return(
        
            <div className = ' tc bg-light-green dib br3 pa2 ma2 bw2 shadow-5'>
                <div className = 'pa2'>
                    <h1>{this.props.type}</h1>

                    {
                        this.props.type === "Hygiene"
                        ? <div>
                            <img className = 'pa3' src = {hygiene}/>
                          </div>
                        :(
                            this.props.type === "Medical"
                            ?<div>
                                <img className = 'pa3' src = {medical}/>
                                </div>
                            :(
                                this.props.type === "Groceries"
                                ? <div>
                                    <img className = 'pa3' src = {groceries}/>
                                </div>
                                : (
                                    this.props.type === "Fruits/Veges"
                                    ? <div>
                                        <img className = 'pa3' src = {fruits}/>
                                        </div>
                                    : null
                                )
                            )
                        )
                    }


                    <p><strong>Delivery Type</strong><br/>{this.props.delivery_type}</p>
                    <p><strong>Contact</strong><br/>{this.props.contact}</p>
                    <p><strong>Shop Name</strong><br/>{this.props.shop_name}</p>
                    <p><strong>Society Name</strong><br/>{this.props.society_name}</p>
                    <p onClick = {this.togglePopup.bind(this)} className = 'pa2 f4 pointer grow button_card_shop b'>Description</p>
                </div>
                {this.state.showPopup ?  
                <PopUp  
                        text='Click "Close Button" to hide popup'  
                        closePopup={this.togglePopup.bind(this)} 
                        description = {this.props.description} 
                />  
                : null  
                }  
            </div>

        );
    }
   
}

export default CardShop;