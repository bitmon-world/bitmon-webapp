import React from 'react';
import {Row, Container, Col, Card, CardBody, CardText,Button} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class GamesView extends React.Component<any, any> {
    render() {
        return (
            <Container>
                <br/>
                <Row className={"justify-content-center align-content-center"}>
                    <h1>Play Bitmon Adventures</h1>
                </Row>
                <br/>
                <br/>
                <Row className={"justify-content-center align-content-center"}>
                    <Col>
                        <Card>
                            <CardBody>
                                <h3>Breed</h3>
                                <CardText>Start breeding your bitmons to increase your performance across all games.</CardText>
                                <Link to="/games/breed">
                                    <Button className={"btn btn-lg"}>
                                        Play
                                    </Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <h3>Capture</h3>
                                <CardText>Start an adventure to find new bitmons and train them.</CardText>
                                <Link to="/games/capture">
                                    <Button className={"btn btn-lg"}>
                                        Play
                                    </Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <h3>Fight</h3>
                                <CardText>Fight against other users to know who is the best Bitmon Master.</CardText>
                                <Link to="/games/fight">
                                    <Button className={"btn btn-lg"}>
                                        Play
                                    </Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
