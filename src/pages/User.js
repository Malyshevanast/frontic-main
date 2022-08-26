import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const UserPage = () => (
  <>
    <Card style={{ width: '95%', margin: 'auto', marginTop: 20 }}>
      <Button style={{ width: '15rem', }} variant="link" href="/course">Вернуться на главную</Button>

      <Row style={{ width: '20%', marginTop:10, marginLeft: 15 }}>
        
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="мммм"
        />
        <label htmlFor="floatingInputCustom">Email</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      </Row>


      <Button style={{ width: '10rem',marginTop: '25px', marginLeft: '50px'  }} variant="light">Создать</Button>
    </Card>
  </>
)

export default UserPage;