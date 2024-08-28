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

    const goAllList = (event) => {
        event.preventDefault();
        dispatch({ type: "VIEW_ALL_LIST", payload: { keyword: "" } });
    };
    return (
        <Row>
            <Col lg={9}>
                <Form onSubmit={goSearchName}>
                    <Row>
                        <Col lg={10}>
                            <Form.Control
                                type="text"
                                placeholder="이름을 입력해주세요."
                                onChange={(event) =>
                                    setKeyword(event.target.value)
                                }
                            />
                        </Col>
                        <Col lg={2}>
                            <Button variant="primary" type="submit">
                                찾기
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col lg={3}>
                <Button variant="primary" type="button" onClick={goAllList}>
                    전체보기
                </Button>
            </Col>
        </Row>
    );
};

export default SearchBox;
