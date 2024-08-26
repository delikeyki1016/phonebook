import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux"; // useDispatch가 액션을 reducer에 던져주는 역할

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    const dispatch = useDispatch();

    const addContact = (event) => {
        // form submit의 경우 새로고침 방지
        event.preventDefault();
        // 액션은 type(액션명), payload(보내줘야하는 값)를 넘겨줌
        dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } }); //name: name
    };

    return (
        // form안에서 버튼이 submit일 경우 onSubmit으로 액션을 추가
        <Form onSubmit={addContact}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="이름을 입력해주세요."
                    onChange={(event) => setName(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="전화번호를 입력해주세요."
                    onChange={(event) => setPhoneNumber(event.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                추가
            </Button>
        </Form>
    );
};

export default ContactForm;
