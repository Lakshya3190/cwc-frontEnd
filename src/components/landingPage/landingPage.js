import React from 'react';
import 'tachyons';
import './landingPage.css';
import icon from './icon.png';
import world from './world.jpg';

const landingPage = ({onRouteChange}) => {
    return(
        <div className = 'landingPage'>
            
            
            <div className = 'nav pa4 pr0'>
            <img className = 'icon br2 pa2'src = {icon} height = '60px' width = 'auto'/>
            <nav id="colorNav" className = 'colorNav'>
            <ul>
                <li class="green">
                    <a class="fa fa-bars"></a>
                    <ul>
                        <li><a><p className = 'pointer' onClick = {() => onRouteChange('findService')}>Find Services</p></a></li>
                        <li><a><p className = 'pointer' onClick = {() => onRouteChange('provideService')}>Provide Services</p></a></li>
                        <li><a><p className = 'pointer' onClick = {() => onRouteChange('registershop')}>Shop Owners</p></a></li>
                        <li><a><p className = 'pointer' onClick = {() => onRouteChange('dashboard')} >Covid-19 Dashboard</p></a></li>
                        <li><a><p className = 'pointer' onClick = {() => onRouteChange('vulnerabilityAnalysis')}>Vulnerability Analysis</p></a></li>
                    </ul>
                </li>
            </ul>
            </nav>
            </div>

<div  className = 'land pa4 ml6'>
            <p className = 'b land1'>Cope with<br/>
            <span className = 'land2 b'>Covid</span></p>
            <p className = 'b f1 land3'><span style = {{color: 'grey'}}>We're all in this <br/></span>TOGETHER.|</p>
</div>
                                                                                            



                {/*<p className = 'pa1 pointer'style = {{fontSize: '250px', color:'white'}}><img className = 'pb5 grow rotate' src = {covid} height = '100px' width = 'auto'/></p>*/}
                
        </div>
    );
}

export default landingPage;

