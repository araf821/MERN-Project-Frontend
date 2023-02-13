import { Link } from "react-router-dom";

const Public = () => {
  return (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Minicat Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Downtown Canada, Minicat Repairs provides trained staff
          ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Minicat Repairs
          <br />
          123 Bebi Street
          <br />
          Downtown Canada, ON C4T D0G
          <br />
          <a href="tel:+15555555555">(911) 911-9111</a>
        </address>
        <br />
        <p>Owner: Minnie D Minicat</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
};
export default Public;
