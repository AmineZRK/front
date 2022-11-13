import { Grid } from '@material-ui/core';
import "./pages/styles.css";
import React from 'react'
import { NavLink} from 'react-router-dom';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';
import Youtube from '../images/youtube.png';


const Footer = () => {
    return (
        <footer className="site-footer">
         <Grid container>
            <Grid item sm={12} md={6}>
              <h6>About</h6>
              <p className="about">We, young boys (Billy & Amine) passionate about the Web and new technologies, are available for a possible interview, to offer you a quality service, if necessary.
                We thank you.
              </p>
            </Grid>
            <Grid item  xs={6} md={3}>
              <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
				<h6>Follow us on</h6>
				<ul className="footer-links reseaux">
					<div>
						<li><a href="#">  <h1><NavLink to='/' ><img className="logoReseauxFooter" src={Facebook} alt="Facebook" / ></NavLink></h1></a></li>
						<li><a href="#">  <h1><NavLink to='/' ><img className="logoReseauxFooter" src={Instagram} alt="Instagram" / ></NavLink></h1></a></li>
					</div>
					
					<div>
						<li><a href="#">  <h1><NavLink to='/' ><img className="logoReseauxFooter" src={Twitter} alt="Twitter" / ></NavLink></h1></a></li>
						<li><a href="#">  <h1><NavLink to='/' ><img className="logoReseauxFooter" src={Youtube} alt="Youtube" / ></NavLink></h1></a></li>
					</div>
				</ul>
			  </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
				<h6>Quick Links</h6>
				<ul className="footer-links">
					<li><a href="#"> <li><h1 style={{fontSize:'15px'}}><NavLink to='/contact' >Contact Us</NavLink></h1></li></a></li>
					<li><a href="#"> <li><h1 style={{fontSize:'15px'}}><NavLink to='/contact' >Contribute</NavLink></h1></li></a></li>
					<li><a href="#"> <li><h1 style={{fontSize:'15px'}}><NavLink to='/contact' >Privacy Policy</NavLink></h1></li></a></li>
				</ul>
			  </div>
            </Grid>
          <hr />
        </Grid>
        <Grid container className="container">
            <Grid item className="col-xs-12" xs={12}>
              <p className="copyright-text">Copyright © 2022 All Rights </p>
            </Grid>
        </Grid>
      </footer>
    )
}

export default Footer
