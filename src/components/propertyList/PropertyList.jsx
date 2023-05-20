import "./PropertyList.css";
const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://plus.unsplash.com/premium_photo-1678286771657-cf22aa97faf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>152 hotels</h2>
            </div>
        </div>


        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>456 resorts</h2>
            </div>
        </div>


        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>230 villas</h2>
            </div>
        </div>  


        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>560 apartments</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList