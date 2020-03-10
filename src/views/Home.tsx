import React from 'react';
import {Row, Container, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class HomeView extends React.Component<any, any> {
    render() {
        return (
            <Container>
                <br/>
                <Row className={"justify-content-center align-content-center"}>
                    <h1>Welcome to Bitmon Adventures!</h1>
                </Row>
                <br/>
                <Row className={"justify-content-center align-content-center"}>
                    <Link to="/games">
                        <Button className={"btn btn-lg"} style={{"width": "200px"}}>
                            Play
                        </Button>
                    </Link>
                </Row>
            </Container>
        )
    }
}
