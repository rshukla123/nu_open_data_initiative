import React, { useState } from "react";
import {
  Button,
  Header,
  Icon,
  Modal,
  Form,
  Select,
  Input,
  TextArea,
  Grid,
  GridRow,
  Container,
  Label,
} from "semantic-ui-react";
import "../styles/Dataset.css";
import { Link } from "react-router-dom";
import logo from "../NODI.png";

const cat_tag = [
  { key: "s", text: "Safety", value: "Sa" },
  { key: "c", text: "Campus", value: "Ca" },
  { key: "a", text: "Admission", value: "Ad" },
  { key: "f", text: "Finances", value: "f" },
  { key: "g", text: "Academic", value: "Ac" },
  { key: "l", text: "Student Life", value: "St" },
];

const data_type = [
  { text: "CSV", value: "csv" },
  { text: "Excel", value: "excel" },
  { text: "Graph", value: "graph" },
  { text: "PDF", value: "pdf" },
  { text: "API", value: "aws" },
  { text: "Database", value: "database" },
];

const handleSubmit = (Val) => {
  if (Val) {
    var ask = window.confirm("Are you sure you want to submit?");
    if (ask) {
      window.alert("Dataset Submitted!");
      window.location.href = "/";
    }
  } else {
    window.alert("Please fill out all necessary information");
  }
};

const handleCancel = () => {
  var ask = window.confirm("Are you sure you want to cancel?");
  if (ask) {
    window.location.href = "/";
  }
};
const Dataset = () => {
  const [Val, setVal] = useState(false);
  return (
    <Modal
      size="small"
      dimmer="blurring"
      trigger={
        <Button className="m_but" class="ui button">
          <i aria-hidden="true" class="plus icon"></i>
        </Button>
      }
      closeIcon
    >
      <Modal.Content>
        <Header>Dataset Name </Header>
        <Label.Group style={{ marginTop: "10px" }}>
          <Label
            content="Safety"
            style={{ backgroundColor: "#4e2a84", color: "white" }}
          />
          <Label content="CSV" />
        </Label.Group>
        More coming here!
      </Modal.Content>
    </Modal>
  );
};

export default Dataset;
