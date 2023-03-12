import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>Created by <a id="profile-link" href="https://github.com/adarshsarangi" target="_blank" title="github-profile" rel="noreferrer">   @adarshsarangi</a></p>
    </footer>
  );
}

export default Footer;
