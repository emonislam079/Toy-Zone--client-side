import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div>
           <div className="footer-container text-light">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div className="col text-center">
        <h3>Toys Zone</h3>
        <br/>
        <p> We offer a wide selection of children’s Toys at the best prices.With fresh toy, quality materials and fun designs, it’s the affordable kids toys brand that you can trust. You will find everything you need.</p>
    </div>
    <div className="col link">
        <h3>Usefull Links</h3>
        <br />
        <a href="/about">About Us</a>
        <br />
        <a href="/home">Contact Us</a>
        <br />
        <a href="/home">Place Order</a>
        <br />
        
    </div>
    <div className="col link">
        <h3>We Accepts</h3>
        <br />
        <a href="/dashboard/payment">Mobile Banking</a>
        <br />
        <a href="/dashboard/payment">Hand Cash</a>
    </div>
    <div className="col contact text-center">
        <h3 >Contact Details</h3>
        <br />
        <p>+01949400955</p>
        
        <br />
        <p>info@example.com</p>
        <br />
        <p>1362 Shantidhara Road</p>
        <p>Dhaka, bangladesh</p>
    </div>
  </div>
</div> 
        </div>
        </div>
    );
};

export default Footer;