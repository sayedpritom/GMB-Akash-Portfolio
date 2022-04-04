import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 col-12">
                    <Card border="primary" style={{ width: '100%', height: '300px' }}>
                        <Card.Header> <h3>What is Context API?</h3> </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                The context API in react provides us a way to pass data through the component tree skipping the hassle to pass props down manually at every level. This way it's easy to exchange unique details and also solves prop-drilling from every level of application at the same time.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-12">
                    <Card border="secondary" style={{ width: '100%', height: '300px'}}>
                        <Card.Header> <h3>What is Semantic Tag?</h3> </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Semantic tags are named in a way that makes them easily understandable both by human and machine readers. Semantic tags were first introduced in HTML5. For example: <b>header</b> , <b>footer</b> and <b>article</b> all are considered as semantic tags as because each of them clearly indicates the purpose and the information they contain.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Blogs;