import { Link } from "react-router-dom";
import Header from "../Header";

export default function IndexPage() {
    return (
      <section className="hotel-menu">
        <div className="container">

         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/236x/7a/a1/94/7aa19415266b8ad0ad570b7d2ecc3e8e.jpg"  className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4>DALAT WIND HOTEL</h4>
              <p>Located in Da Lat, 500 meters from Xuan Huong Lake, Dalat Wind Hotel is a 2-star hotel with a 24-hour front desk, a shared lounge, free WiFi and free private parking.</p>
          </div>
         </div>

         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/236x/15/ca/4a/15ca4ad998f43fcb424d909b40590bf4.jpg" className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4>RAON VILLA</h4>
              <p>Rooms at Raon Dalat are  equipped with a work desk, a hairdryer, bed linen and a shared bathroom. Some rooms have city views and a private bathroom with a shower/bath and free toiletries.</p>
          </div>
         </div>

         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/236x/05/c3/70/05c3708983be1bc7021cc041f29c4143.jpg" className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4>HERA BOUTIQUE HOTEL</h4>
              <p>Rooms at Hera Boutique Hotel are fitted with a seating area, a flat-screen TV with cable channels, a safe, a kettle and a private bathroom with a shower, free toiletries and a hairdryer. Some rooms have a balcony, while others have city views. Each room is equipped with bed linen and towels.</p>
          </div>
         </div>

         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/236x/12/9d/cd/129dcdb9c18f3ac3fbef56e578f89c31.jpg" className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4>JOLIE HOUSE</h4>
              <p>Each unit has a kitchen area with a microwave and a fridge, a safety deposit box, a flat-screen cable TV, ironing facilities, a work desk and a seating area with a sofa. All units are fitted with a private bathroom with a shower/bath, slippers, a hairdryer and free toiletries.</p>
          </div>
         </div>
         <div className="clearfix"> </div>
      </div>
      </section>
      
    )
} 