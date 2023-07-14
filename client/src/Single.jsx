import React from 'react'
import ReactDOM from 'react-dom/client'
import dp from "/Users/saiganesh/Dev/Prj2/client/src/img/IMG-20220522-WA0055_Original.jpg";
// import delete from "/Users/saiganesh/Dev/Prj2/client/src/img/icons8-delete-64.png";
import edit from "/Users/saiganesh/Dev/Prj2/client/src/img/icons8-edit-100.png";
import Delete from "/Users/saiganesh/Dev/Prj2/client/src/img/delete.png";
import { Link } from 'react-router-dom';
// import {link} from react-router-dom;
import Menu from "../src/Components/Menu"

function Single() {
    return (
      <>
        <div className="single">
          <div className="content">
            <img src='https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
            <div className="user">
              <img src={dp}/>
              <div className="info">
                <div className='name'>Ganesh</div>
                <div className='posted'>Posted 2 days ago</div>
              </div>
              <div className="edit">
                <Link to="/Write?edit=2">
                  <img src={edit}/>
                </Link>
                <img src={Delete}/>
              </div>
            </div>
            <h1>Lorem Ipsum is simply dummy text of the printing</h1>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

              The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.

            </p>

          </div>
          <div className="menu">
            <Menu/>
          </div>
        </div>
      </>
    )
  }
  
  export default Single
  