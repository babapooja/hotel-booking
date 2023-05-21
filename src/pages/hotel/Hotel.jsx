import './Hotel.css';
import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import EmailList from "../../components/emailList/EmailList"
import Footer from '../../components/footer/Footer';

const Hotel = () => {

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
    },{
      src: "https://images.unsplash.com/photo-1527530462287-d0438a5819fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1161&q=80"
    },

  ]

  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
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
              images.map(image => {
                return <div className="hotelImgWrapper">
                  <img className="hotelImg" src={image.src} alt="" /></div>
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