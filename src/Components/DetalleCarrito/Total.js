import { Button ,Row} from 'react-bootstrap'


const Total = ({total, actualiza_total}) => {
    return ( <Row className="justify-content-center"> <Button onClick={actualiza_total}>Total Compra  </Button>
    {total>0?(<h3> $ {total}</h3>):("")}
    </Row>
        
        )
    
     
    ;
}
 
export default Total;