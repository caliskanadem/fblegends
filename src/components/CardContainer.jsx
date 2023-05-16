import { Col, Container, Row, Form } from "react-bootstrap";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        className="w-50 m-auto"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter((player) =>
              player.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((player, index) => (
              <Col md={6} lg={4} xl={3} key={index}>
                <PlayerCard {...player} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
