import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
            {<a href="#home">home</a>}
            {<a href="#about" >about</a>}
            {<a href="#projects">projects</a>}
         </nav>;
         {links.map((link) =>(
          <a href={"#"+ value} key={link}>
            {link}
            </a>
         ) )}
}

export default NavBar;
