import React, { Component } from "react";
import AddStudent from "./AddStudent";

export default class ListStudent extends Component {
  state = {
    listStudents: [
      { id: "01", name: "Huy", phone: "09764521", email: "huy@gmail.com" },
      { id: "02", name: "Hoang", phone: "09745451", email: "hoang@gmail.com" },
      { id: "03", name: "Tran", phone: "09763241", email: "tran@gmail.com" },
    ],
    editStudent: {},
  };
  addNewStudent = (info) => {
    let { listStudents } = this.state;
    this.setState({
      listStudents: [...listStudents, info],
    });
  };
  handleDeleteStudent = (info) => {
    let updateBeforeDel = this.state.listStudents.filter(
      (item) => item.id !== info.id
    );
    this.setState({
      listStudents: updateBeforeDel,
    });
  };
  handleEditStudent = (info) => {
    let { listStudents, editStudent } = this.state;
    let isEmptyObj = Object.keys(editStudent).length === 0;
    this.setState({
      editStudent: info,
    });
    //Saving
    if (isEmptyObj === false && editStudent.id === info.id) {
      let useListStudents = [...listStudents];
      let objIndex = useListStudents.findIndex((item) => item.id === info.id);
      let regex = /^[0-9]*$/;
      if (!editStudent.name || !editStudent.phone || !editStudent.email) {
        alert("Thong tin khong duoc de trong!");
        return;
      }
      if (!regex.test(editStudent.phone)) {
        alert("So dien thoai khong hop le!");
        return;
      }
      useListStudents[objIndex].name = editStudent.name;
      useListStudents[objIndex].phone = editStudent.phone;
      useListStudents[objIndex].email = editStudent.email;
      this.setState({
        listStudents: useListStudents,
        editStudent: {},
      });

      return;
    }
  };
  handleOnChangeName = (e) => {
    let useEditStudent = { ...this.state.editStudent };
    useEditStudent.name = e.target.value;
    this.setState({
      editStudent: useEditStudent,
    });
  };
  handleOnChangePhone = (e) => {
    let useEditStudent = { ...this.state.editStudent };
    useEditStudent.phone = e.target.value;
    this.setState({
      editStudent: useEditStudent,
    });
  };
  handleOnChangeEmail = (e) => {
    let useEditStudent = { ...this.state.editStudent };
    useEditStudent.email = e.target.value;
    this.setState({
      editStudent: useEditStudent,
    });
  };
  render() {
    let { listStudents, editStudent } = this.state;
    let isEmptyObj = Object.keys(editStudent).length === 0;

    return (
      <>
        <div>
          <AddStudent addNewStudent={this.addNewStudent} />
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
              {listStudents.map((item, index) => {
                return (
                  <tr key={item.id}>
                    {isEmptyObj === true ? (
                      <td>{item.name}</td>
                    ) : (
                      <>
                        {editStudent.id === item.id ? (
                          <td>
                            <input
                              type="text"
                              value={editStudent.name}
                              onChange={(e) => this.handleOnChangeName(e)}
                            />
                          </td>
                        ) : (
                          <td>{item.name}</td>
                        )}
                      </>
                    )}
                    {isEmptyObj === true ? (
                      <td>{item.phone}</td>
                    ) : (
                      <>
                        {editStudent.id === item.id ? (
                          <td>
                            <input
                              type="text"
                              value={editStudent.phone}
                              onChange={(e) => this.handleOnChangePhone(e)}
                            />
                          </td>
                        ) : (
                          <td>{item.phone}</td>
                        )}
                      </>
                    )}
                    {isEmptyObj === true ? (
                      <td>{item.email}</td>
                    ) : (
                      <>
                        {editStudent.id === item.id ? (
                          <td>
                            <input
                              type="text"
                              value={editStudent.email}
                              onChange={(e) => this.handleOnChangeEmail(e)}
                            />
                          </td>
                        ) : (
                          <td>{item.email}</td>
                        )}
                      </>
                    )}
                    <td>
                      <button
                        onClick={() => this.handleEditStudent(item)}
                        style={{ backgroundColor: "yellow", color: "black" }}
                      >
                        {isEmptyObj === false && editStudent.id === item.id
                          ? "Save"
                          : "Edit"}
                      </button>
                      <button
                        onClick={() => this.handleDeleteStudent(item)}
                        style={{ backgroundColor: "red", color: "white" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
