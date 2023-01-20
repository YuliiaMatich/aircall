import React from "react";

import "./Footer.css"

const Footer = () => {
return (
<div className="footer">
  <img src={"/docs/images/call.png"}></img>
  <img src={"/docs/images/user.png"}></img>
  <img id="dialpad" src={"/docs/images/dialpad.png"}></img>
  <img src={"/docs/images/gear.png"}></img>
  <img src={"/docs/images/record.png"}></img>
</div>
);
}

export default Footer;