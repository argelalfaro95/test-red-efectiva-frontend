import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";  
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { getAllUsers } from "../../../services/UserServices";

import "./index.css";
const TableFilterComponent = ({ data, setData }) => {
  const [users, setUsers] = useState([]);
  const [originalData, setOriginalData] = useState(data);
  const [textAscOrDesc, setTextAscOrDesc] = useState("")


  useEffect(() => {
    getAllUsers().then((response) => {
      console.log(response);
      setUsers(response);
    });
  }, []);

  const handleFilterByUserId = (e) => {
    const userId = e.target.value;
    if (userId) {
      const filteredData = originalData.filter(
        (item) => item.userId.toString() === userId
      );
      setData(filteredData);
    } else {
      setData(originalData);
    }
  }

  const handleFilterByTextBody = (e) => {
    const text = e.target.value;
    if (text) {
      const filteredData = originalData.filter((item) =>
        item.body.toLowerCase().includes(text.toLowerCase())
      );
      setData(filteredData);
    } else {
      setData(originalData);
    }
  };



  return (
    <Row className="rowClassName">
      <Col>
        <Form.Select
          onChange={handleFilterByUserId}
        >
          <option value="">Select User ID</option>
          {users?.map((user, index) => (
            <option key={index} value={user.id}>
              {user.name}
            </option>
          ))}
        </Form.Select>
      </Col>
      <Col>
        <Form.Control
          type="text"
          placeholder="Búsqueda de texto en el mensaje"
          onChange={handleFilterByTextBody}
        />
      </Col>
      <Col>
      <div className="d-grid gap-2">

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Ordenar por Título  {textAscOrDesc ? ': '+textAscOrDesc : ''}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                const orderedData = [...data].sort((a, b) =>
                  a.title.localeCompare(b.title)
                );
                setData(orderedData);
                setTextAscOrDesc("Asc")
              }}
            >
              Asc
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                const orderedData = [...data].sort((a, b) =>
                  b.title.localeCompare(a.title)
                );
                setData(orderedData);
                setTextAscOrDesc("Desc")
              }}
            >
              Desc
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      </Col>
      
      <Col>
      <div className="d-grid gap-2">

        <Button
          onClick={() => {
            setData(originalData);
            setTextAscOrDesc("")
          }}
        >
          Limpiar Filtros
        </Button>
      </div>
      </Col>
    </Row>
  );
};

export default TableFilterComponent;
