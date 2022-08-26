import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CoursePage = () => (
  <>
    <Card style={{ width: '95%', margin: 'auto', marginTop: 20 }}>
      <Card.Body>
        <Form.Select style={{ width: '50rem', margin: 20, marginBottom: 20, marginTop: 20 }} >
        <option>Все кафедры</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Form.Select>
      </Card.Body>

      <Button style={{width: '10rem', marginLeft: '25px'}} variant="light" type="submit" href="/cour">Создание курсов</Button>
      <Button style={{width: '10rem', marginLeft: '25px', marginTop: 20}} variant="light" type="submit" href="/utp">УТП</Button>
      <Button style={{width: '10rem', marginLeft: '25px', marginTop: 20}} variant="light" type="submit" href="/rp">РП</Button>
      <Button style={{width: '10rem', marginLeft: '25px', marginTop: 20}} variant="light" type="submit" href="/prov">Форма проведения</Button>
      <Button style={{width: '10rem', marginLeft: '25px', marginTop: 20}} variant="light" type="submit" href="/hear">Категория слушателей</Button>
      <Button style={{width: '10rem', marginLeft: '25px', marginTop: 20}} variant="light" type="submit" href="/user">Создание пользователей</Button>
      <Button style={{width: '10rem', marginLeft: '25px', marginTop: 20}} variant="light" type="submit" href="/kaf">Создание кафедры</Button>
    </Card>
  </>
)

export default CoursePage;