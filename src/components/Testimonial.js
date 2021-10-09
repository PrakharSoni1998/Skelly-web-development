import React from 'react'

function Testimonial() {
    return (

        <div className="container2 testimonial ">
            <div>
                <h2>Testimonials</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi ex magnam? Ea, nostrum deleniti.</p>
            </div>
            <div className="testimg">
                <Test />
                <Test />
                <Test />





            </div>
        </div>

    )
}
function Test() {
    return (
        <div>
            <img src="./logo/testimonial.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iure?</p>
        </div>
    )
}
export default Testimonial
