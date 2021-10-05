import './wrapper.scss'

const Wrapper = ({ children }) => {

    return (
        <div dir="rtl" className="wrapper">
            {children}
        </div>
    )
}

export default Wrapper;
