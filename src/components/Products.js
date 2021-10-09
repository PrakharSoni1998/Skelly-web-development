import React from 'react'

function Products() {
    return (
        <div className="container container2 ">
            <div className="phead">
                <h3>Recent Products</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, iusto!</p>
            </div>
            <div className="mainprow">
            <div className="prow">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <div className="prow">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            </div>



        </div>
    )
}
// function Hoc(props){
//     return(
//         <div className="container">

//         </div>
//     )
// }
function Product(props) {
    return (
        <div className=" product">
            <img src="./tshirt/orange.png" alt="" />
            <p>Textured</p>
            <p>$50</p>
        </div>
    )
}

export default Products
