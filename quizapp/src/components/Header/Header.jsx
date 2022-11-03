import { Link } from "react-router-dom";
import "./Header.css";
import Typical from 'react-typical'
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        <div  className="title">
       <span id="typicallyh1" className="title">
                         
                            <Typical
                            loop={Infinity}
                            steps={[
                                " Quiz App💻",
                                4000,
                                " Get Ready",
                                4000,
                               
                            ]}
                            />
                        </span>
       </div>
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;

