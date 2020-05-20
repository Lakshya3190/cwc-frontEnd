import React from 'react';
import PopUp from './popup/popup.js';
import './card.css';
import finance from './finance.png';
import medi from './medical.png';
import supplies from './supplies.png';
import technical from './technical.png';

class Card extends React.Component {

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

                    <h1>{this.props.kind}</h1>


                    {
                        this.props.kind === "Technical"
                        ? <div>
                            <img className = 'pa3' src = {technical}/>
                          </div>
                        :(
                            this.props.kind === "Medical"
                            ?<div>
                                <img className = 'pa3' src = {medi}/>
                                </div>
                            :(
                                this.props.kind === "Supplies"
                                ? <div>
                                    <img className = 'pa3' src = {supplies}/>
                                </div>
                                : (
                                    this.props.kind === "Financial"
                                    ? <div>
                                        <img className = 'pa3' src = {finance}/>
                                        </div>
                                    : null
                                )
                            )
                        )
                    }


                    <p><strong>Email</strong><br/>{this.props.email}</p>
                    <p><strong>Contact</strong><br/>{this.props.phone}</p>
                    <p><strong>Society</strong><br/>{this.props.society}</p>
                    <p onClick = {this.togglePopup.bind(this)} className = 'pa2 f4 pointer grow button_card b'>Description</p>
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

export default Card;