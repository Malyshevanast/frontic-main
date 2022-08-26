import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProvPage = () => (
  <>
    <Card style={{ width: '95%', margin: 'auto', marginTop: 20 }}>
      <Button style={{ width: '15rem', }} variant="link" href="/course">Вернуться на главную</Button>

      <Row style={{ width: '20%', marginTop:10, marginLeft: 15 }}>
        
      <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Форма проведения"
          >
            <Form.Select aria-label="Floating label select example">
              <option value="1">Очно</option>
              <option value="2">Очно-дист.</option>
              <option value="3">Дист.</option>
            </Form.Select>
          </FloatingLabel>
        </Col>

      </Row>


      <Button style={{ width: '10rem',marginTop: '25px', marginLeft: '50px'  }} variant="light">Создать</Button>
    </Card>
  </>
)

export default ProvPage;