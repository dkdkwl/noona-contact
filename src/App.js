import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

// 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있다.
// 리스트에 유저 이름과 전화번호를 추가 할 수 있다.
// 리스트에 아이템이 몇개 있는지 보인다.
// 사용자가 유저를 이름검색으로 찾을 수 있다.

function App() {
  return (
      <div className="App">
        <h1 className='title'>연락처</h1>
        <Container>
          <Row>
            <Col>
              <ContactForm/>
            </Col>
            <Col>
              <ContactList/>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default App;
