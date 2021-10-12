import './wrapper.scss'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
const Wrapper = ({ children }) => {

    return (
        <div dir="rtl" className="wrapper">
            <Header />
            <div className="content ">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Wrapper;
