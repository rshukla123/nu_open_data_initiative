import React, { useState, useEffect } from "react";
import {
  Grid,
  Header,
  Icon,
  Divider,
  Accordion,
  Form,
  Input,
  Menu,
  Label,
  Button,
  Container,
  Card,
} from "semantic-ui-react";
import nu from "../nu.jpg";
import "../styles/MainPage.css";
import Dataset from "./Dataset";

const categories = [
  { name: "Safety", icon: "heartbeat" },
  { name: "Campus", icon: "sun" },
  { name: "Admission", icon: "graduation" },
  { name: "Finances", icon: "dollar sign" },
  { name: "Academic", icon: "dna" },
  { name: "Student Life", icon: "futbol" },
];

const fileTypes = [
  { name: "CSV", icon: "file outline" },
  { name: "Excel", icon: "file excel outline" },
  { name: "Graph", icon: "line graph" },
  { name: "PDF", icon: "file pdf outline" },
  { name: "API", icon: "aws" },
  { name: "Database", icon: "database" },
];

const filterPanel = (filter) => (
  <Form>
    <Form.Group grouped>
      {filter.map((value) => (
        <Form.Checkbox label={value.name} />
      ))}
    </Form.Group>
  </Form>
);

const filters = [
  { title: "File Types", content: { content: filterPanel(fileTypes) }, key: 0 },
  {
    title: "Categories",
    content: { content: filterPanel(categories) },
    key: 1,
  },
];

const Datasets = () => {
  return (
    <Grid stackable divided>
      <Grid.Row>
        <Grid.Column>
          <Input fluid icon="search" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <Accordion
            styled
            panels={filters}
            defaultActiveIndex={[0, 1]}
            exclusive={false}
          />
        </Grid.Column>
        <Grid.Column width={12}>
          <Menu vertical text fluid>
            {[...Array(10)].map((x) => (
              <Menu.Item>
                <Grid>
                  <Grid.Column width={13}>
                    <Grid.Row>
                      <Header size="small">
                        This is is a Dataset
                        <Dataset></Dataset>
                        <Header.Subheader>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi semper sagittis sapien at posuere. Cras at
                          nisi.
                        </Header.Subheader>
                      </Header>
                    </Grid.Row>
                    <Grid.Row>
                      <Label.Group style={{ marginTop: "10px" }}>
                        <Label
                          content="Safety"
                          style={{ backgroundColor: "#4e2a84", color: "white" }}
                        />
                        <Label content="CSV" />
                      </Label.Group>
                    </Grid.Row>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Icon name="file excel" />
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Icon name="download" />
                  </Grid.Column>
                </Grid>
                <Divider />
              </Menu.Item>
            ))}
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const DatasetsPage = () => {
  return (
    <React.Fragment>
      <div className="Fullsearch">
        <img
          id="image"
          height="350px"
          src={nu}
          alt="Northwestern Image"
          className="logo"
        />
        <h1 id="bottom" className="search-bar2">
          {" "}
          Search for Datasets
        </h1>
      </div>
      <Datasets />
    </React.Fragment>
  );
};

export default DatasetsPage;
