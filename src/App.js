import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

// 1. 왼쪽에는 연락처 입력폼이 있고, 오른쪽에는 연락처 리스트와 search가 있다.
// 2. 연락처 입력폼에 이름과 전화번호를 생성하면 연락처 리스트에 목록이 추가된다.
// 3. 연락처 리스트에 아이템이 몇개있는 지 보인다.
// 4. 연락처를 이름으로 검색할 수 있다.

function App() {
    return (
        <div className="body-wrap">
            <h1 className="title">Phone Book</h1>
            <Container>
                <Row>
                    <Col>
                        <ContactForm />
                    </Col>
                    <Col>
                        <ContactList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
