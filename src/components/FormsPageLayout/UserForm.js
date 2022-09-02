import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./style.css";

export function UserForm() {
  const [teams, setTeams] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetch("https://pcfy.redberryinternship.ge/api/teams")
      .then((response) => response.json())
      .then((data) => setTeams(data.data));

    fetch("https://pcfy.redberryinternship.ge/api/positions")
      .then((response) => response.json())
      .then((data) => setPositions(data.data));
  }, []);

  return (
    <Form className="form-container">
      <Row>
        <Col sm={12} lg={6}>
          <Form.Group>
            <Form.Label>სახელი</Form.Label>
            <Form.Control type="text" placeholder="გრიშა" />
            <Form.Text>მინიმუმ 2 სიმბოლო, ქართული ასოები</Form.Text>
          </Form.Group>
        </Col>

        <Col sm={12} lg={6}>
          <Form.Group>
            <Form.Label>გვარი</Form.Label>
            <Form.Control type="text" placeholder="ბაგრატიონი" />
            <Form.Text>მინიმუმ 2 სიმბოლო, ქართული ასოები</Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group>
        <Form.Select defaultValue="თიმი">
          <option disabled>თიმი</option>
          {teams?.map(({ id, name }) => {
            return <option key={id}>{name}</option>;
          })}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Select defaultValue="პოზიცია">
          <option disabled>პოზიცია</option>
          {positions?.map(({ id, name }) => {
            return <option key={id}>{name}</option>;
          })}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>მეილი</Form.Label>
        <Form.Control type="email" placeholder="grisha666@redberry.ge" />
        <Form.Text>უნდა მთავრდებოდეს @redberry.ge ით</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>ტელეფონის ნომერი</Form.Label>
        <Form.Control type="text" placeholder="+995 599 55 55 55" />
        <Form.Text>უნდა აკმაყოფილებდეს ქართული მობ.ნომის ფორმატს</Form.Text>
      </Form.Group>

      <Button className="mt-4 btn-float" variant="primary" type="submit">
        შემდეგი
      </Button>
    </Form>
  );
}
