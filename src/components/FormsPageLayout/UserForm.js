import React, { useState, useEffect, useContext, useReducer } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { TitlesContext } from "../../Context";
import "./style.css";

function userFormHandle(state, action) {
  switch (action.type) {
    case "inputField": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "selectField": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "submit": {
      return {
        ...state,
      };
    }
    default:
      throw new Error();
  }
}

const initialState = {
  name: "",
  lastname: "",
  team: "",
  position: "",
  email: "",
  phoneNumber: "",
};

const geoLetters = /^[ა-ჰ]+$/;
const emailEx = /[a-z0-9]+@redberry.ge/;
const numberEx =
  /^\(?([+995]{4})\)?[" "]?([0-9]{3})[" "]?([0-9]{3})?[" "]?([0-9]{3})$/;

export function UserForm() {
  const [teams, setTeams] = useState([]);
  const [positions, setPositions] = useState([]);
  // FORM FIELDS VALIDATION //
  // NAME VALIDATION
  const [nameIsEmpty, setNameIsEmpty] = useState(false);
  const [nameIsInvalid, setNameIsInvalid] = useState(false);
  const [nameIsShort, setNameIsShort] = useState(false);
  const [nameIsValidated, setNameIsValidated] = useState(false);
  // LASTNAME VALIDATION
  const [lastnameIsEmpty, setLastnameIsEmpty] = useState(false);
  const [lastnameIsInvalid, setLastnameIsInvalid] = useState(false);
  const [lastnameIsShort, setLastnameIsShort] = useState(false);
  const [lastnameIsValidated, setLastnameIsValidated] = useState(false);
  // TEAM VALIDATION
  const [teamIsEmpty, setTeamIsEmpty] = useState(false);
  const [teamIsValidated, setTeamIsValidated] = useState(false);
  // POSITION VALIDATION
  const [positionIsEmpty, setPositionIsEmpty] = useState(false);
  const [positionIsValidated, setPositionIsValidated] = useState(false);
  // EMAIL VALIDATION
  const [emailIsEmpty, setEmailIsEmpty] = useState(false);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [emailIsValidated, setEmailIsValidated] = useState(false);
  // NUMBER VALIDATION
  const [numberIsEmpty, setNumberIsEmpty] = useState(false);
  const [numberIsInvalid, setNumberIsInvalid] = useState(false);
  const [numberIsValidated, setNumberIsValidated] = useState(false);

  // REDUCER HOOK
  const [state, dispatch] = useReducer(userFormHandle, initialState);
  const { active, setActive } = useContext(TitlesContext);

  useEffect(() => {
    fetch("https://pcfy.redberryinternship.ge/api/teams")
      .then((response) => response.json())
      .then((data) => setTeams(data.data));

    fetch("https://pcfy.redberryinternship.ge/api/positions")
      .then((response) => response.json())
      .then((data) => setPositions(data.data));
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  function nameValidation() {
    if (state.name.length === 0) {
      setNameIsEmpty(true);
      setNameIsInvalid(false);
      setNameIsShort(false);
    } else if (geoLetters.test(state.name) === false) {
      setNameIsEmpty(false);
      setNameIsInvalid(true);
      setNameIsShort(false);
    } else if (state.name.length <= 2) {
      setNameIsEmpty(false);
      setNameIsInvalid(false);
      setNameIsShort(true);
    } else {
      setNameIsEmpty(false);
      setNameIsInvalid(false);
      setNameIsShort(false);
      setNameIsValidated(true);
    }
  }

  function lastnameValidation() {
    if (state.lastname.length === 0) {
      setLastnameIsEmpty(true);
      setLastnameIsInvalid(false);
      setLastnameIsShort(false);
    } else if (geoLetters.test(state.lastname) === false) {
      setLastnameIsEmpty(false);
      setLastnameIsInvalid(true);
      setLastnameIsShort(false);
    } else if (state.lastname.length <= 2) {
      setLastnameIsEmpty(false);
      setLastnameIsInvalid(false);
      setLastnameIsShort(true);
    } else {
      setLastnameIsEmpty(false);
      setLastnameIsInvalid(false);
      setLastnameIsShort(false);
      setLastnameIsValidated(true);
    }
  }

  function teamValidation() {
    if (state.team === "") {
      setTeamIsEmpty(true);
    } else {
      setTeamIsEmpty(false);
      setTeamIsValidated(true);
    }
  }

  function positionValidation() {
    if (state.position === "") {
      setPositionIsEmpty(true);
    } else {
      setPositionIsEmpty(false);
      setPositionIsValidated(true);
    }
  }

  function emailValidation() {
    if (state.email.length === 0) {
      setEmailIsEmpty(true);
      setEmailIsInvalid(false);
    } else if (emailEx.test(state.email) === false) {
      setEmailIsEmpty(false);
      setEmailIsInvalid(true);
    } else {
      setEmailIsEmpty(false);
      setEmailIsInvalid(false);
      setEmailIsValidated(true);
    }
  }

  function numberValidation() {
    if (state.phoneNumber.length === 0) {
      setNumberIsEmpty(true);
      setNumberIsInvalid(false);
    } else if (numberEx.test(state.phoneNumber) === false) {
      setNumberIsEmpty(false);
      setNumberIsInvalid(true);
    } else {
      setNumberIsEmpty(false);
      setNumberIsInvalid(false);
      setNumberIsValidated(true);
    }
  }

  function handleUserFormSubmit() {
    nameValidation();
    lastnameValidation();
    teamValidation();
    positionValidation();
    emailValidation();
    numberValidation();
    if (
      nameIsValidated === true &&
      lastnameIsValidated === true &&
      teamIsValidated === true &&
      positionIsValidated === true &&
      emailIsValidated === true &&
      numberIsValidated === true
    ) {
      setActive(!active);
    }
  }

  return (
    <Form className="form-container">
      <Row>
        <Col sm={12} lg={6}>
          <Form.Group>
            <Form.Label
              className={
                nameIsEmpty || nameIsShort || nameIsInvalid ? "error-color" : ""
              }
            >
              სახელი
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="გრიშა"
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: "inputField",
                  field: "name",
                  value: e.target.value,
                })
              }
            />
            {nameIsInvalid ? (
              <Form.Text className="error-color">
                გამოიყენეთ ქართული ასოები
              </Form.Text>
            ) : (
              <Form.Text>მინიმუმ 2 სიმბოლო, ქართული ასოები</Form.Text>
            )}
          </Form.Group>
        </Col>

        <Col sm={12} lg={6}>
          <Form.Group>
            <Form.Label
              className={
                lastnameIsEmpty || lastnameIsShort || lastnameIsInvalid
                  ? "error-color"
                  : ""
              }
            >
              გვარი
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="ბაგრატიონი"
              value={state.lastname}
              onChange={(e) => {
                dispatch({
                  type: "inputField",
                  field: "lastname",
                  value: e.target.value,
                });
              }}
            />
            {lastnameIsInvalid ? (
              <Form.Text className="error-color">
                გამოიყენეთ ქართული ასოები
              </Form.Text>
            ) : (
              <Form.Text>მინიმუმ 2 სიმბოლო, ქართული ასოები</Form.Text>
            )}
          </Form.Group>
        </Col>
      </Row>

      <Form.Group>
        <Form.Select
          className={teamIsEmpty ? "error-border-color" : ""}
          defaultValue="თიმი"
          onChange={(e) =>
            dispatch({
              type: "selectField",
              field: "team",
              value: e.target.value,
            })
          }
        >
          <option disabled>თიმი</option>
          {teams?.map(({ id, name }) => {
            return <option key={id}>{name}</option>;
          })}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Select
          className={positionIsEmpty ? "error-border-color" : ""}
          defaultValue="პოზიცია"
          onChange={(e) =>
            dispatch({
              type: "selectField",
              field: "position",
              value: e.target.value,
            })
          }
        >
          <option disabled>პოზიცია</option>
          {positions?.map(({ id, name }) => {
            return <option key={id}>{name}</option>;
          })}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label
          className={emailIsEmpty || emailIsInvalid ? "error-color" : ""}
        >
          მეილი
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="grisha666@redberry.ge"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "inputField",
              field: "email",
              value: e.target.value,
            })
          }
        />
        {emailIsInvalid ? (
          <Form.Text>მეილის ფორმატი არასწორია</Form.Text>
        ) : (
          <Form.Text>უნდა მთავრდებოდეს @redberry.ge ით</Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label
          className={numberIsEmpty || numberIsInvalid ? "error-color" : ""}
        >
          ტელეფონის ნომერი
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="+995 599 55 55 55"
          value={state.phoneNumber}
          onChange={(e) =>
            dispatch({
              type: "inputField",
              field: "phoneNumber",
              value: e.target.value,
            })
          }
        />
        <Form.Text className={numberIsInvalid ? "error-color" : ""}>
          უნდა აკმაყოფილებდეს ქართული მობ.ნომის ფორმატს
        </Form.Text>
      </Form.Group>

      <Button
        className="mt-4 btn-float"
        variant="primary"
        type="button"
        onClick={() => handleUserFormSubmit()}
      >
        შემდეგი
      </Button>
    </Form>
  );
}
