import React, { Component } from "react";
import {
    Col,
    Row,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
} from "reactstrap";

export default class ContactForm extends Component {
    render() {
        return (
            <div>
                <h2> Contact Us </h2>
                <Form>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="first">
                                    {/* <Label for="first" size="lg"> */}
                                    First Name
                                </Label>
                                <Input
                                    type="text"
                                    name="first"
                                    id="first"
                                    placeholder=""
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="last">Last Name</Label>
                                <Input
                                    type="text"
                                    name="last"
                                    id="last"
                                    placeholder=""
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="company"> Company</Label>
                                <Input type="text" id="company"></Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="phone">Phone Number </Label>
                                <Input type="tel" id="phone"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="email"
                                ></Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="url">
                                    Your Website{"     "}
                                    <small>Please include http://</small>
                                </Label>
                                <Input type="url" id="url" placeholder="url" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <FormGroup>
                            {/* <legend> */}
                            When is the best time of day to reach you?
                            {/* </legend> */}
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="contact-preference"
                                    />{" "}
                                    Morning
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="contact-preference"
                                    />{" "}
                                    Evenning
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        {/* </Col> */}
                    </Row>
                    <Row form>
                        <FormGroup check>
                            Would you like to recieve our email newsletter?
                            <Label check>
                                <Input type="checkbox" /> Sure!
                            </Label>
                        </FormGroup>
                    </Row>
                    <Row>
                        <Button>Submit</Button>
                    </Row>
                </Form>
            </div>
        );
    }
}
