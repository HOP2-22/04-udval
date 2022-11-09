import React from "react";
import FooterLogos from "../images/footerlogo.png";
export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContainerContainer">
        <div className="footerDivOne">
          <div className="footerTeamsContainer">
            <span className="secOneUppersTeam">team</span>
            <span className="secOneUppersTeamdot">.</span>
          </div>
          <div>
            <img src={FooterLogos} alt="footerlogo" />
          </div>
        </div>
        <div className="footerDivTwo">
          <div className="footerHeaders">Use Cases</div>
          <div className="footerContents">UI Design</div>
          <div className="footerContents">UX Design</div>
          <div className="footerContents">Prototyping</div>
          <div className="footerContents">UI Design</div>
          <div className="footerContents">UX Design</div>
          <div className="footerContents">Prototyping</div>
        </div>
        <div className="footerDivThree">
          <div className="footerHeaders">Explore</div>
          <div className="footerContents">Figma</div>
          <div className="footerContents">Customers</div>
          <div className="footerContents">Why I Love Figma</div>
          <div className="footerContents">Figma</div>
          <div className="footerContents">Customers</div>
          <div className="footerContents">Why I Love Figma</div>
        </div>
        <div className="footerDivFour">
          <div className="footerHeaders">Resources</div>
          <div className="footerContents">Community Resources Hub</div>
          <div className="footerContents">Support</div>
          <div className="footerContents">Education</div>
          <div className="footerContents">Community Resources Hub</div>
          <div className="footerContents">Support</div>
          <div className="footerContents">Education</div>
        </div>
        <div className="footerDivFive">
          <div className="footerInputHeader">Subscribe to our newsletter</div>
          <div className="footerInputContainer">
            <input placeholder="Email" className="footerInput" />
          </div>
        </div>
      </div>
    </div>
  );
};
