import Logo from "../assets/images.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <img
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNcOd7LkFUxLP6AkwktisdLxsPvvd2fToCA&usqp=CAU"
      />
    </Link>
  );
};

export default Title;
