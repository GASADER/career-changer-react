import UserContext from './UserContext';
import Navbar from './Navbar';

// set Layout for other child component
const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout