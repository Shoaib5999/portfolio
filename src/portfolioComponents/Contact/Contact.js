import React from 'react'
import "../Contact/Contact.css"

function Contact() {
  return (
    <>
        <div className='contact-container'>
            <div className='contact-parent'>
                <div className='contact-heading' id="Contactme">
                    <h4>Contact Me</h4>
                    <div>Let's Keep In Touch</div>
                </div>
                <div className='getInTouch'>
                
                <div className='getInTouch-heading'>
                    <div className='Icons'>
                    <h3>Get In Touch 🫵</h3>
                    {/* <div className='social-icons'>
                    <div className="colz-icons">
              <a href="/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="/">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-twitter"></i>
              </a>

            </div>
            </div> */}
            <div className='social-icons'>
                    <div className="colz-icons">
              <a href="/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="/">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-twitter"></i>
              </a>

            </div>
            </div>
            <form>
                        <input className='Input'/>
                      </form>
                    </div>
                </div>
                      
                    <div className='getInTouch-background'>
                    </div>
                    <div className='contact-form'>
                    <form action='contact' method='get'>
  <div className="mb-3 form-container">
    <label for="exampleInputEmail1" className="form-label contact-text">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text contact-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label contact-text">Contact Number</label>
    <input type="number" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label contact-text" for="exampleCheck1 ">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary contact-text">Submit</button>
</form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact