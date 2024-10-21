import './css/Footer.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { Link, useNavigate } from 'react-router-dom';
import { CenterFocusStrong } from '@mui/icons-material';

function Footer() {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0); // Scroll to the top when the link is clicked
    };

    return (
        <>
            <footer className="top">
                <div className="footer_image"></div>
                <div className="links">
                    <div className="links-column">
                        <h2>Company Overview</h2>
                        <p>QUALIFLYIT SOLUTIONS.</p>
                        <Link to="/about" onClick={() => handleLinkClick("/about")}>
                            Read More <KeyboardDoubleArrowRightRoundedIcon />
                        </Link>
                        <div className="social_icons_div">
                            <div className="socials">
                                <a href="https://wa.me/8019426810" target="_blank" rel="noopener noreferrer">
                                    <WhatsAppIcon sx={{ fontSize: 40, color: "#42ecf5" }} />
                                </a>
                            </div>
                            <div className="socials">
                                <FacebookIcon sx={{ fontSize: 40, color: "#42ecf5" }} />
                            </div>
                            <div className='socials'> 
                         <LinkedInIcon sx={{ fontSize: 40, color: '#42ecf5' }} />
                         </div>
                         </div> 
                        
                    </div>

                    <div className="links-column column2">
                        <h2>Services</h2>
                        <Link to="/csv" onClick={() => handleLinkClick("/csv")}>
                            <KeyboardArrowRightRoundedIcon sx={{ color: '#42ecf5' }} />Computer System Validation
                        </Link>
                        <Link to="/CandQ" onClick={() => handleLinkClick("/CandQ")}>
                            <KeyboardArrowRightRoundedIcon sx={{ color: '#42ecf5' }} />Commissioning Qualification
                        </Link>
                        <Link to="/Excel" onClick={() => handleLinkClick("/Excel")}>
                            <KeyboardArrowRightRoundedIcon sx={{ color: '#42ecf5' }} />Excel Sheet
                        </Link>
                    
                        <Link to="/Trainings" onClick={() => handleLinkClick("/Trainings")}>
                            <KeyboardArrowRightRoundedIcon sx={{ color: '#42ecf5' }} />Training
                        </Link>
                        
                    </div>

                    <div className="links-column">
                        <h2>Contact Us</h2>
                        <p>
                            QualifyIT Solutions<br />
                            Flat No:501, Near Vignan School,<br />
                            Venkataraya Nagar, Nizampet,<br />
                            Hyderabad, Telangana - 500090
                        </p>
                        <p>+91 8019426810</p>
                        <p>+91 8019426812</p>
                        <p>Email: <a href="mailto:info@qualifyitsolutions.com">info@qualifyitsolutions.com</a></p>

                     </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
