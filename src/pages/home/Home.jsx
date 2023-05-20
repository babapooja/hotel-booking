import EmailList from '../../components/emailList/EmailList'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Header from '../../components/header/Header'
import NavBar from '../../components/navbar/NavBar'
import PropertyList from '../../components/propertyList/PropertyList'
import './Home.css'


const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />

            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Home guests love</h1>
                <FeaturedProperties/>
                <EmailList/>
            </div>
        </div>
    )
}

export default Home