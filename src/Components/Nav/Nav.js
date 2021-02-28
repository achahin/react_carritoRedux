import { Link } from "react-router-dom";

import { Container, Row} from 'react-bootstrap'
const Nav = () => {
    return (
        <Container>
            <Row className="justify-content-md-around">
                    <h2>Carrito de compras</h2>
                    <Link className="btn btn-info" to="/Home">Home</Link>
                    <Link  className="btn btn-info"  to="/Carrito">Checkout</Link>

               </Row>
          <hr></hr>     
        </Container>
    );
}

export default Nav;