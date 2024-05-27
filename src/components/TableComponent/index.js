import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import TableFilterComponent from "./TableFilterComponent";
import SpinnerComponent from "../shared/SpinnerComponent";
import { getAllPostByUser } from "../../services/utils/TransformServices";
const TableComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllPostByUser()
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <SpinnerComponent />;
  }

  return (
    <div>
      <TableFilterComponent
        data={data}
        setData={setData}
      />
      <Table striped bordered hover responsive >
        <thead>
          <tr>
            <th>User ID</th>
            <th>User</th>
            <th>Name</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.userId}</td>
              <td>{item.username}</td>
              <td>{item.name}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
