import React from 'react'
import partyimg from "../assets/partyimg.jpg"
import tradi from "../assets/tradi.AVIF"
import jlry2 from "../assets/jlry2.AVIF"
import kids3 from "../assets/kids3.AVIF"
import mencap from "../assets/mencap.AVIF"
import western from "../assets/western.AVIF"
import office from "../assets/office.AVIF"
import access from "../assets/access.AVIF"
import giftcard from "../assets/giftcard.WEBP"
import grab from "../assets/grab.AVIF"
import louis from "../assets/louis.png"
import peter from "../assets/peter.png"
import mango from "../assets/mango.png"
import levis from "../assets/levis.jpg"
import calvien from "../assets/calvien.png"
import forever from "../assets/forever.png"
import adidas from "../assets/adidas.png"



const SecondPart = () => {
  return (
    <>
      <h1 className='display 1 mt-5'>NEW ARRIVALS</h1>

      <div className="card-group mt-5">

        <div className="card">
          <img src={partyimg} className="card-img-big" alt="..." />
          <div className="card-body-big">
            <h5 className="card-title-big">Party Collection</h5>
            <p className="card-text">MIN. 40% OFF</p>
          </div>
        </div>
        
        <div className="card">
          <img src={tradi} className="card-img-big" alt="..." />
          <div className="card-body-big">
            <h5 className="card-title-big">WOMEN'S Ethnic Wear</h5>
            <p className="card-text">FLAT 50% OFF</p>
          </div>
        </div>

        <div className="card">
          <img src={jlry2} className="card-img-big" alt="..." />
          <div className="card-body-big">
            <h5 className="card-title-big">JEWELLERY COLLECTION</h5>
            <p className="card-text">FLAT 60% OFF</p>
          </div>
        </div>

        <div className="card">
          <img src={kids3} className="card-img-big" alt="..." />
          <div className="card-body-big">
            <h5 className="card-title-big">KID'S COLLECTION</h5>
            <p className="card-text">STARTING 249/-</p>
          </div>
        </div>

        <div className="card">
          <img src={mencap} className="card-img-big" alt="..." />
          <div className="card-body-big">
            <h5 className="card-title-big">MEN'S Casual Wear</h5>
            <p className="card-text">FLAT 75% OFF</p>
          </div>
        </div>

        <div className="card">
          <img src={western} className="card-img-big" alt="..." />
          <div className="card-body-big">
            <h5 className="card-title-big">WOMEN'S Western Wear</h5>
            <p className="card-text">STARTING 300/-</p>
          </div>
        </div>

        <div className="card">
          <img src={access} className="card-img-big" alt="..." />
          <div className="card-body-big">
            <h5 className="card-title-big">ACCESSORIES</h5>
            <p className="card-text">STARTING 249/-</p>
          </div>
        </div>

        <div className="card">
          <img src={office} className="card-img-big" alt="..." />
          <div className="card-body-big">
            <h5 className="card-title-big">WOMEN'S Formal Wear</h5>
            <p className="card-text">FLAT 65% OFF</p>
          </div>

        </div>

      </div>

      <div className="gift-card">
        <img src={giftcard} alt="" />
        <img src={grab} alt="" />
      </div>

      <div className="brands">
        <img src={louis} alt="" />
        <img src={peter} alt="" />
        <img src={mango} alt="" />
        <img src={levis} alt="" />
        <img src={calvien} alt="" />
        <img src={forever} alt="" />
        <img src={adidas} alt="" />

      </div>

    </>
  )
}

export default SecondPart
