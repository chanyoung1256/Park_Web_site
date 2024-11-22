import React from 'react'

function header() {
  return (
    <div className="header" id="link_header">
        <div className="searchArea">
            <form>
                <input type="search" placeholder="search" />
                <span> 검색 </span>
            </form>
        </div>
        <ul className="nav">
            <li><a href="#link_header"> HOME </a></li>
            <li><a href="#link_main_text0"> ABOUT </a></li>
            <li><a href="#link_main_service"> SERVICE </a></li>
            <li><a href="#link_main_contact"> CONTACT </a></li>
         </ul>
    </div>
  )
}

export default header;