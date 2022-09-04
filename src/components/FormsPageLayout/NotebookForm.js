import React, { useState, useEffect, useContext } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { TitlesContext } from "../../Context";

export function NotebookForm() {
  const [notebooks, setNotebooks] = useState([]);
  const [cpus, setCpus] = useState([]);

  useEffect(() => {
    fetch("https://pcfy.redberryinternship.ge/api/brands")
      .then((response) => response.json())
      .then((data) => setNotebooks(data.data));

    fetch("https://pcfy.redberryinternship.ge/api/cpus")
      .then((response) => response.json())
      .then((data) => setCpus(data.data));
  }, []);

  const { setActive } = useContext(TitlesContext);

  return (
    <Form className="form-container">
      <Form.Group className="file-upload">
        <Form.Label>
          ჩააგდე ან ატვირთე <br /> ლეპტოპის ფოტო
        </Form.Label>
        <Button className="btn-upload">ატვირთე</Button>
        <Form.Control type="file" />
      </Form.Group>

      <Row>
        <Col sm={12} lg={6}>
          <Form.Group>
            <Form.Label>ლეპტოპის სახელი</Form.Label>
            <Form.Control type="text" placeholder="HP" />
            <Form.Text
              style={{ fontSize: "11px" }}
            >{`ლათინური ასოები, ციფრები, !@#$%^&*()_+=`}</Form.Text>
          </Form.Group>
        </Col>

        <Col sm={12} lg={6}>
          <Form.Group>
            <Form.Label className="empty-label" />
            <Form.Select defaultValue="ლეპტოპის ბრენდი">
              <option disabled>ლეპტოპის ბრენდი</option>
              {notebooks?.map(({ id, name }) => {
                return <option key={id}>{name}</option>;
              })}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col sm={12} lg={4}>
          <Form.Group>
            <Form.Label className="empty-label" />
            <Form.Select defaultValue="CPU">
              <option disabled>CPU</option>
              {cpus?.map(({ id, name }) => {
                return <option key={id}>{name}</option>;
              })}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col sm={12} lg={4}>
          <Form.Group>
            <Form.Label>CPU-ს ბირთვი</Form.Label>
            <Form.Control type="text" placeholder="14" />
            <Form.Text style={{ fontSize: "11px" }}>მხოლოდ ციფრები</Form.Text>
          </Form.Group>
        </Col>

        <Col sm={12} lg={4}>
          <Form.Group>
            <Form.Label>CPU-ს ნაკადი</Form.Label>
            <Form.Control type="text" placeholder="365" />
            <Form.Text style={{ fontSize: "11px" }}>მხოლოდ ციფრები</Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm={12} lg={6}>
          <Form.Group>
            <Form.Label>{`ლეპტოპის RAM (GB)`}</Form.Label>
            <Form.Control type="text" placeholder="16" />
            <Form.Text style={{ fontSize: "11px" }}>მხოლოდ ციფრები</Form.Text>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label>მეხსიერების</Form.Label>
            <div className="form-checkbox">
              <Form.Check label="SSD" name="group1" type="radio" />
              <Form.Check
                label="HDD"
                name="group1"
                type="radio"
                style={{ marginLeft: "30px" }}
              />
            </div>
          </Form.Group>
        </Col>
      </Row>
      <hr />

      <Row>
        <Col sm={12} lg={6}>
          <Form.Group>
            <Form.Label>{`შეჩენის რიცხვი(არჩევითი)`}</Form.Label>
            <Form.Control type="text" placeholder="დდ/თთ/წწწწ" />
          </Form.Group>
        </Col>

        <Col sm={12} lg={6}>
          <Form.Group>
            <Form.Label>ლეპტოპის ფასი</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="0000" />
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup>
            <Form.Text style={{ fontSize: "11px" }}>მხოლოდ ციფრები</Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group>
        <Form.Label>ლეპტოპის მდგომარეობა</Form.Label>
        <div className="form-checkbox">
          <Form.Check label="ახალი" name="group1" type="radio" />
          <Form.Check
            label="მეორადი"
            name="group1"
            type="radio"
            style={{ marginLeft: "30px" }}
          />
        </div>
      </Form.Group>

      <div className="form-footer">
        <h6 onClick={() => setActive(true)}>უკან</h6>
        <Button>დამახსოვრება</Button>
      </div>
    </Form>
  );
}
