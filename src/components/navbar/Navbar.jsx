import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../images/netflixlogo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src={logo}
            alt="netflix logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon />
          <span>KID</span>
          <NotificationsIcon />
          <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
          alt='avatar' />
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
