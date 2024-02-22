import './nav-bar.css'


function Navbar(){

    return(
    <div id='nav-bar'> {/* tthis is navigation bar section */}
      <p id='logo'>Logo</p>
      <ul id="nav-eles-box">{/* this is navigation bar div */}
        <li id="nav-ele">home</li>
        <li id="nav-ele">contact</li>
        <li id="nav-ele">about</li>
        <li id="nav-ele">setting</li>
      </ul>
    </div>
    );
}

export default Navbar;
