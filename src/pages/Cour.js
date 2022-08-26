import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CourPage = () => (
  <>
    <Card style={{ width: '95%', margin: 'auto', marginTop: 20 }}>
      <Button style={{ width: '15rem', }} variant="link" href="/course">Вернуться на главную</Button>

      <Row style={{ width: '95%', margin: 'auto', marginTop: 20 }}>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="№">
            <Form.Control type="text" placeholder="text" />
          </FloatingLabel>
        </Col>



        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Наименование курса">
            <Form.Control type="text" placeholder="text" />
          </FloatingLabel>
        </Col>




        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="СДО"
          >
            <Form.Select aria-label="Floating label select example">
              <option value="1">Moodle ВИРО</option>
              <option value="2">СЭДО ВО</option>
              <option value="3">Cisco Netacad</option>
              <option value="4">Другое</option>
              <option value="5">Не определено</option>
            </Form.Select>
          </FloatingLabel>
        </Col>



        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="УТП"
          >
            <Form.Select aria-label="Floating label select example">
              <option value="1">---</option>
              <option value="1">2019</option>
              <option value="2">2020</option>
              <option value="3">2021</option>
              <option value="4">2022</option>
            </Form.Select>
          </FloatingLabel>
        </Col>


        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="РП"
          >
            <Form.Select aria-label="Floating label select example">
              <option value="1">---</option>
              <option value="1">2019</option>
              <option value="2">2020</option>
              <option value="3">2021</option>
              <option value="4">2022</option>
              <option value="5">Да</option>
              <option value="5">Нет</option>
            </Form.Select>
          </FloatingLabel>
        </Col>

      </Row>




      <Row style={{ width: '95%', margin: 'auto', marginTop: 20 }}>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Планируемая дата">
            <Form.Control type="date" placeholder="Дата" id="Дата" name="Дата" required />
          </FloatingLabel>
        </Col>



        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Количество часов">
            <Form.Control type="text" placeholder="text" />
          </FloatingLabel>
        </Col>


        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Количество человек">
            <Form.Control type="text" placeholder="text" />
          </FloatingLabel>
        </Col>

        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Количество групп на 2022">
            <Form.Control type="text" placeholder="text" />
          </FloatingLabel>
        </Col>


        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Общее количество часов">
            <Form.Control type="text" placeholder="text" />
          </FloatingLabel>
        </Col>
      </Row>








      <Row style={{ width: '95%', margin: 'auto', marginTop: 20 }}>

        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Преподаватель"
          >
            <Form.Select aria-label="Floating label select example">
              <option value="1">Мишин Д.В., Мишина И.Ю.</option>
              <option value="2">Олейникова Е.В., Суховерхова Э.М.</option>
              <option value="3">Почаева Н.Д., Джакония Е.С.</option>
              <option value="4">Федосеев И.В.</option>
              <option value="5">Федосеев И.В. другие кафедры 226(36)</option>
              <option value="5">Полякова В.А.</option>
              <option value="5">Малкова Т.</option>
            </Form.Select>
          </FloatingLabel>
        </Col>


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



        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Категория слушателей">
            <Form.Control type="text" placeholder="text" />
          </FloatingLabel>
        </Col>


        <Col md>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Аннотация к курсу"

          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
        </Col>

      </Row>


      <Button style={{ width: '10rem',marginTop: '25px', marginLeft: '50px'  }} variant="light">Создать</Button>
    </Card>
  </>
)

export default CourPage;