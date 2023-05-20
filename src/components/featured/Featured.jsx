import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Chicago</h1>
                <h2>500 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>340 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured