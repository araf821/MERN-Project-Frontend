import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const DashFooter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation;

  let goHomeBtn = null;
  if (pathname !== "/dash") {
    goHomeBtn = (
      <button
        className="dash-footer__button icon-button"
        title="Home"
        onClick={() => navigate("/")}
      >
        <FontAwesomeIcon icon={faHouse} />
      </button>
    );
  }

  return (
    <footer className="dash-footer">
      {goHomeBtn}
      <p>Current User: </p>
      <p>Status:</p>
    </footer>
  );
};
export default DashFooter;
