import './SearchItem.css';

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="searchItemImg" />
            <div className="searchItemDesc">
                <h1 className="searchItemTitle">Tower St Apartments</h1>
                <span className="searchItemDistance">500m from center</span>
                <span className="searchItemTaxiOp">Free airport taxi</span>
                <span className="searchItemSubtitle">Studio apt with AC</span>
                <span className="searchItemFeatures">Entire Studio</span>
                <span className="searchItemCancelOp">Free cancellation</span>
                <span className="searchItemCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="searchItemDetails">
                <div className="searchItemRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="searchItemDetailsText">
                    <span className="searchItemPrice">$120</span>
                    <span className="searchItemTaxOp">Includes taxes and fees</span>
                    <button className='searchItemCheckButton'>See Availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem