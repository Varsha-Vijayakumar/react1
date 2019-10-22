import React from "react";
import { InputGroup, Input, InputGroupAddon, Button, Container } from "reactstrap";

const Update = ({ id, upd }) => {
    const [name, setname] = React.useState("")
    const [num, setnum] = React.useState("")


    return (
        <Container>
            <InputGroup>
                <InputGroupAddon addonType="prepend">Contact Name:</InputGroupAddon>
                <Input placeholder="For.eg:Ria" onChange={e => setname(e.target.value)}
                    value={name} />
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">Phone Number:</InputGroupAddon>
                <Input placeholder="For.eg:9820938902" min={0} max={9999999999} type="number" step="1" onChange={e => setnum(e.target.value)}
                    value={num} />
            </InputGroup>
            <Button color="primary" onClick={() => {
                upd(name, num, id);
            }}>Save</Button>
        </Container>
    )
}
export default Update;