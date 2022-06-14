import React from "react";

const Home = ()=>{
    return(
        <>
            <h2 style={{width: "300px", margin: "0 auto", marginBottom: "30px"}}>Top 3 products</h2>

            <div className="d-flex justify-content-around">
                <div className="card" style={{ width: "25rem", marginBottom: '15px' }}>
                    <img
                        className="card-img-top"
                        style={{height: "500px"}}

                        src= "https://target.scene7.com/is/image/Target/GUEST_576ab98c-8af3-43a3-a2fe-242b81bc2e62?wid=488&hei=488&fmt=pjpeg"
                        alt= "Img Whitney"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Whitney</h5>
                        Price: 1500$ <br/>
                        Description: This one's for all the Houston out there, this one's for you. This Men's Whitney Houston Short Sleeve Graphic T-Shirt T-Shirt featuring Whitney 
                    </div>
                </div>
                <div className="card" style={{ width: "25rem", marginBottom: '15px' }}>
                    <img
                        className="card-img-top"
                        style={{height: "500px"}}
                        src= "https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg"
                        alt= "Img Malayali"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Malayali</h5>
                        Price: 1500$ <br/>
                        Description: Mydesignation MALAYALI TSHIRT UNISEX COMFORT FIT - GOLDEN 3D PRINT 
                    </div>
                </div>

                <div className="card" style={{ width: "25rem", marginBottom: '15px' }}>
                    <img
                        className="card-img-top"
                        style={{height: "500px"}}
                        src= "https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dwf319dedc/images/CMU232019-F.jpg?sw=400&sfrm=jpeg"
                        alt= "Img Chicago Bulls"
                    />
                    <div className="card-body">
                        <h5 className="card-title"> Chicago Bulls</h5>
                        Price: 1500$ <br/>
                        Description: Chicago Bulls
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home; 

