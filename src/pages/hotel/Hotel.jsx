import './Hotel.css';
import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import EmailList from "../../components/emailList/EmailList"
import Footer from '../../components/footer/Footer';
import { useState } from 'react';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1506664453913-f326aa81f54d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1678297269038-aa251119d712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=800"
    }, {
      src: "https://images.unsplash.com/photo-1527530462287-d0438a5819fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1161&q=80"
    },

  ]

  const handleImgClick = (i) => {
    setSlideNumber(i);
    setOpen(true);
    window.scroll=''
  }

  const handlemove = (dir) => {
    let newSlideNum;
    if (dir == 'l') {
      newSlideNum = slideNumber === 0 ? images.length - 1 : slideNumber - 1;
    } else {
      newSlideNum = slideNumber === images.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNum);
  }

  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(!open)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handlemove('l')} />
          <div className="sliderWrapper">
            <img src={images[slideNumber].src} />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handlemove('r')} />

        </div>}
        <div className="hotelWrapper">
          <button className="hotelBookNowButton">Reserve Or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span> 1525 Custis Ct, Dunwoody, GA</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 200m away from Marta station
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          {/* image gallery */}
          <div className="hotelImages">
            {
              images.map((image, i) => {
                return <div className="hotelImgWrapper">
                  <img className="hotelImg" src={image.src} alt="" onClick={() => handleImgClick(i)} /></div>
              })
            }
          </div>
          {/* hotel details */}
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <div className="hotelDetailTitle">Stay here and enjoy the nature!</div>
              <div className="hotelDetailsDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus quo nemo quibusdam culpa iusto exercitationem pariatur iure laborum! Cupiditate reprehenderit assumenda molestiae quas ut provident maxime excepturi velit alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus quo nemo quibusdam culpa iusto exercitationem pariatur iure laborum! Cupiditate reprehenderit assumenda molestiae quas ut provident maxime excepturi velit alias.
              </div>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the heart of the city, this property has everything very near by</span>
              <h2><b>$945</b>(9 nights)</h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <EmailList />
        <Footer />
      </div>

    </div>
  )
}

export default Hotel