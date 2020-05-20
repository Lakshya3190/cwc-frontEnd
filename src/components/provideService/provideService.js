import React from 'react';
import 'tachyons';
import './provideService.css';


class provideService extends React.Component {
    constructor(props) {
        super();

        this.state = {
            kind: '',
            email: '',
            phone: '',
            society: '',
            description: ''
        }
    }

    onKindChange = (event) => {
        this.setState({kind: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPhoneChange = (event) => {
        this.setState({phone: event.target.value});
    }

    onSocietyChange = (event) => {
        this.setState({society: event.target.value})
    }

    onDescriptionChange = (event) => {
        this.setState({description: event.target.value})
    }

    onSubmitRegister = () => {
        fetch('https://sleepy-castle-14535.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                kind: this.state.kind,
                email: this.state.email,
                phone: this.state.phone,
                society: this.state.society,
                description: this.state.description 
            })
        })

        .then(response => response.json())
        .then(this.props.onRouteChange('home'))
    }
    


    render(){
        return(
        <div className = 'form-text'>

            <main class="pa4 black-80" style = {{textAlign: 'center'}}>
                <div className="measure center form pa3 br3">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0 pa4">
                        <legend style = {{color: 'black'}} className="f2 fw6 ph0 mh0 pa2">Offer A Service</legend>

                        <div className = 'pa3'>
                                <span style = {{color: 'black'}} className = 'pa4'>Choose a service you can offer:<br/></span> 
                                    <select onChange = {this.onKindChange} id="kind" name="Kind" className = 'br4'>
                                        <option value="">Pick an Option</option>
                                        <option value="Medical">Medical</option>
                                        <option value="Supplies">Supplies</option>
                                        <option value="Financial">Financial</option>
                                        <option value="Technical">Technical</option>
                                    </select>
                        </div>

                        <div class="mt3">
                            <label style = {{color: 'black'}} className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange = {this.onEmailChange} 
                                  className="pa2 input-reset ba bg-white hover-bg-black hover-white w-60 form br4" 
                                  type="email" 
                                  name="email-address"  
                                  id="email-address"/>
                        </div>

                        <div class="mt3">
                            <label style = {{color: 'black'}}  className="db fw6 lh-copy f6" htmlFor="email-address">Phone</label>
                            <input  onChange = {this.onPhoneChange} 
                                    className="pa2 input-reset ba bg-white hover-bg-black hover-white w-60 form br4" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"/>
                        </div>

                        <div class="mt3">
                            <label  style = {{color: 'black'}} className="db fw6 lh-copy f6" htmlFor="email-address">Name of Society</label>
                            <input onChange = {this.onSocietyChange} 
                                   className="pa2 input-reset ba bg-white hover-bg-black hover-white w-70 form br4" 
                                   type="email" 
                                   name="email-address"  
                                   id="email-address"/>
                        </div>

                    <div className = 'pa3'>
                            <label style = {{color: 'black'}} htmlFor="comment" className="f6 b db mb2">Description of Service <span class="normal black-60">(optional)</span></label>
                            <textarea onChange = {this.onDescriptionChange} id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br4 mb2" aria-describedby="comment-desc"></textarea>
                            <small style = {{color: 'black'}} id="comment-desc" className="f6 black-60">Add a description of services you are willing to offer.</small>
                    </div>

                    </fieldset>
                    <div className="">
                    <input style = {{color: 'black'}} onClick = {this.onSubmitRegister} className=" f2 b ph3 pv2 input-reset ba b--white bg-blue grow pointer f6 dib form button" type="submit" value="Submit"/>
                    <p  onClick = {() => this.props.onRouteChange('home')} style = {{flex: 'flex', justifyContent: 'start', color: 'black'}} className = ' f2 b ph3 pv2 input-reset ba b--white bg-blue grow pointer f6 dib form button'>Home</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
    
}

export default provideService;