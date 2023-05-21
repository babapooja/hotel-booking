import "./Footer.css";

const Footer = () => {

    const fListItems = ["Countries", "Regions", "Citites", "Districts", "Hotels", "Airports"];
    const displayListItems = () => {
        return <ul className="fList">
            {fListItems.map(item => {
                return <li className="fListItem">
                    {item}
                </li>
            })}
        </ul>
    }



    return (
        <div className="footer">
            <div className="fLists">
                {displayListItems()}
                {displayListItems()}
                {displayListItems()}
                {displayListItems()}
                {displayListItems()}
            </div>
                <div className="fText">Copyright &copy; 2023 Hotel Booking</div>
        </div>
    )
}

export default Footer