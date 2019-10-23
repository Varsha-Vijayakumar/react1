import React from "react";
import Update from "./Update"

import { Container, Row, Col, Table, Button, Form, Input } from "reactstrap";

const List = ({ list, Delete, upd }) => {
    const [check, setcheck] = React.useState(false)

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 1 }}>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone_Number</th>
                                <th>Action1</th>
                                <th>Action2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map(lis => {
                                    return (
                                        <tr key={lis.id}>
                                            <td>{lis.name}</td>
                                            <td>{lis.phone}</td>
                                            <td><Button onClick={() => { Delete(lis.id) }}>Del</Button></td>
                                            <td><Button onClick={() => {
                                                console.log("entered")
                                                setcheck(true)
                                                {
                                                    return (
                                                        check === true ? (<Update id={lis.id} upd={upd} />) : null
                                                    )
                                                }
                                            }}>Edit</Button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    {
                    }
                </Col>
            </Row>
        </Container>
    )
}
export default List;