import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();

    const goSearchName = (event) => {
        event.preventDefault();
        dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });
    };
    return (
        <Form onSubmit={goSearchName}>
            <Row>
                <Col lg={6}>
                    <Form.Control
                        type="text"
                        placeholder="이름을 입력해주세요."
                        onChange={(event) => setKeyword(event.target.value)}
                    />
                </Col>
                <Col lg={3}>
                    <Button variant="primary" type="submit">
                        찾기
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchBox;
