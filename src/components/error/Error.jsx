import { Link } from "react-router-dom";
import './error.css'

const Error = () => {
  return (
    <section>
        <h1 className="titError">Error 404: Not Found</h1>
        <div className="containerLinkErr">
            <Link to="/">
                <button className="btnError">Volver al Menu</button>
            </Link>
        </div>
    </section>
  )
}
export default Error;