import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="bottom">
        <img alt="header logo" src="assets/heading2.svg" />
        <div className="disclaimer">
          <h4>DISCLAMER</h4>
          <p>
            All images are copyrighted to their respective owners. All content
            cited is derived from their respective sources. If you believe we
            have used your copyrighted content without permission, send us an
            email at wvmccale@go.olemiss.edu and we will remove it immediately.
          </p>
        </div>

        <div className="fine-print">
          <div>
            <p>@CSCI 354 All rights reserved</p>
          </div>

          <div>
            <p>Created by Willie McCaleb</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
