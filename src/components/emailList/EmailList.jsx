import "./EmailList.css";

const EmailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save Time, Save Money</h1>
        <span className="mailDesc">Sign up and we will send the best deals to you</span>

        <div className="mailInputContainer">
            <input type="text" placeholder="Enter your email address"/>
            <button>Subscribe</button>
        </div>
        


    </div>
  )
}

export default EmailList