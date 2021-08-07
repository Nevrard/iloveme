import React from "react";
import './footer.scss';

const Footer = () => <footer className="page-footer font-small blue pt-4 bg-primary">
    <div className="container-fluid text-center text-md-left">
                <h5 className="text-uppercase white">In crisis?</h5>
                <p className="white">Contact your health care provider or <a href="https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html" target="_blank">click here for supports!</a></p>
        </div>

    <div className="footer-copyright text-center py-3 white">Copyright © 2021
    </div>

</footer>

export default Footer