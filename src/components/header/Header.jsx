import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
    const optionValues = ['Adult', 'Children', 'Room'];
    const [openDate, setOpenDate] = useState(false);
    
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 0
    })

    const navigate = useNavigate();

    const handleOption = (type, iord) => {
        setOptions(prev => {
            return {
                ...prev,
                [type]: iord == '-' ? options[type] - 1 : options[type] + 1
            }
        })
    }

    const displayOptions = () => {
        return <div className="options">
            {
                optionValues.map(optionValue => {
                    return <div className="optionItem">
                        {/* adult */}
                        <span className="optionText">{optionValue}</span>
                        <div className="optionCounter">
                            <button className="optionCounterButton" disabled={options[optionValue.toLowerCase()] < 1} onClick={() => handleOption(optionValue.toLowerCase(), "-")}>-</button>
                            <span className="optionCounterNumber">{options[optionValue.toLowerCase()]}</span>
                            <button className="optionCounterButton" onClick={() => handleOption(optionValue.toLowerCase(), "+")}>+</button>
                        </div>
                    </div>
                })
            }
        </div>

    }

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } })
    }


    return (
        <div className="header">
            <div className={type == "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                {
                    type != "list" && <>
                        <h1 className="headerTitle">
                            A lifetime of discounts? It's Genius
                        </h1>
                        <p className="headerDesc">
                            Get rewarded for your travels - unlock instant savings of 10% or more with a free account.
                        </p>
                        <button className="headerBtn">
                            Sign In/ Register
                        </button>
                        <div className="headerSearch">
                            {/* search text input */}
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input onChange={e => setDestination(e.target.value)} type="text" placeholder="Where are you going?" className="headerSearchInput" />
                            </div>
                            {/* calendar */}
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to  ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                {openDate && <DateRange
                                    ranges={date}
                                    onChange={item => setDate([item.selection])}
                                    editableDateInputs={true}
                                    moveRangeOnFirstSelection={false}
                                    className="date"
                                    minDate={new Date()}
                                />}

                            </div>
                            {/* selecting the options */}
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => { setOpenOptions(!openOptions) }} className="headerSearchText">{`${options.adult} adults . ${options.children} children . ${options.room} room `}</span>
                                {openOptions && displayOptions()}
                            </div>
                            <div className="headerSearchItem">
                                <button onClick={handleSearch} className="headerBtn">Search</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header