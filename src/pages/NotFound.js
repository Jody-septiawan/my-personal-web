import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

import Img from '../assets/not-found.svg'

export default function NotFound() {
    return (
        <Container className="mt-5 pt-5">
            <Row className="d-flex justify-content-center">
                <Col md="6" className="mt-5">
                    <img src={Img} className="img-fluid" alt="404" />
                    <div className="font-patrick text-light h2 text-center mt-3">Salah Alamat Brow 🥱</div>
                    <div className="text-center mt-4">
                        <Link to="/" 
                            className="font-patrick text-primary h3"
                            style={{textDecoration: 'none'}}>
                            🏃🏻 Pulang
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
