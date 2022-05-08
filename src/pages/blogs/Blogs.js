import React from 'react';
import './Blogs.css'
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='my-5'>
            <Container>
                <div className='titles'>
                    <p className='section-sub-title'>THINKING POSITIVE</p>
                    <h1 className='section-title'>SOME DOCUMENTATION</h1>
                </div >
                <Row xs={1} md={1} lg={2} className="gy-5">
                    <Col>
                        <div className="blog">
                            <h3>JavaScript</h3>
                            <p>JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="blog">
                            <h3>NodeJS</h3>
                            <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="blog">
                            <h3>When Should Use Node js</h3>
                            <p>Basically Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
                            
                        </div>
                    </Col>
                    <Col>
                        <div className="blog">
                            <h3>When Should Use MongoDB</h3>
                            <strong>MongoDB is a document-oriented NoSQL database used for high volume data storage</strong>
                            <p>MongoDB are a good choice when data is document-centric and doesn't fit well into the schema of a relational database, when  need to accommodate massive scale, when rapidly prototyping, and a few other use cases.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="blog">
                            <h3>SQL databases</h3>
                            <p>SQL databases are primarily called as Relational Databases. SQL databases defines and manipulates data based structured query language. SQL requires to use predefined schemas to determine the structure of data before work with it. Also all of data must follow the same structure. SQL databases are vertically scalable. This means can increase the load on a single server by increasing things like RAM, CPU or SSD </p>
                            
                        </div>
                    </Col>
                    <Col>
                        <div className="blog">
                            <h3>NoSQL database</h3>
                            <p>NoSQL database are primarily called as non-relational or distributed database. A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. NoSQL databases are horizontally scalable. This means that handle more traffic by sharding, or adding more servers in NoSQL database.</p>
                        </div>
                    </Col>
                </Row>
           </Container>
        </div>
    );
};

export default Blogs;