import React from 'react'

function Dashboard() {
    return (
        <div className="tstyle container2" >
            <div id="tdesc">
                <h1>- Arrow Print Tees</h1><br />
                <p>              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad sit quasi non dolorum praesentium.</p><br /><br />
                <button style={{ width: "150px", borderRadius: "8px", padding: "10px" }}>Buy Now</button>

            </div>
            <div id="tt">
                <img src="./tshirt/orange.png" alt="" />
                <hr />
                <div id="tshirt">
                    <img src="./tshirt/orange.png" alt="" />
                    <img src="./tshirt/black.png" alt="" />
                    <img src="./tshirt/white.png" alt="" />


                </div>
            </div>

        </div>
    )
}

export default Dashboard
