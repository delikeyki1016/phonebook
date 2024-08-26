import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
    console.log("item?", item);
    return (
        <Row className="contact-box">
            <Col lg={1}>
                <img
                    src="https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg?ssl=1"
                    alt=""
                    className="user-img"
                />
            </Col>
            <Col lg={11}>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    );
};

export default ContactItem;
