import React from 'react'

function Contact() {
    return (
        <div className="container2">
            <div className="contact">
                <div className="contactimg">
                    <img src="./logo/form.jpg" alt="" />
                </div>
                <div className="add">
                    <p><strong>Address Details</strong></p>
                    <p><strong>401 Broadway,24 floor Lt.Street Iceland</strong></p><br /><br />
                    <p><strong>E-mail Address</strong></p>
                    <p><strong>contact@gmail.com</strong></p>
                    <p><strong>contact@gmail.com</strong></p><br /><br />
                    <p><strong>contact@gmail.com</strong></p>
                    <p><strong>Telephone-Number</strong></p>
                    <p><strong>+1-800-567-412</strong></p>
                    <p><strong>+1-800-567-412</strong></p>

                </div>
                <div className="form">
                    <div className="form1">
                        <p>Simply fill the form and we will be soon in touch.</p>
                        <br /><br /><br />
                        <p>Name*</p><br /><br />
                        <hr />
                        <p>Email*</p><br /><br />
                        <hr />
                        <p>Subject*</p><br /><br />
                        <hr />
                        <p>Message*</p><br /><br />
                        <hr />
                        <button type="submit">Send Message</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact
