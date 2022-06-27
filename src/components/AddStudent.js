import React, { Component } from "react";

export default class AddStudent extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
  };
  handleOnChangeId = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleOnChangePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  handleOnChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleAddStudent = () => {
    let regex = /^[0-9]*$/;
    if (!this.state.name || !this.state.phone || !this.state.email) {
      alert("Thong tin khong duoc de trong!");
      return;
    }
    if (!regex.test(this.state.phone)) {
      alert("So dien thoai khong hop le!");
      return;
    }
    let info = {
      id: Math.floor(Math.random() * 10000),
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
    };
    this.props.addNewStudent(info);
    this.setState({
      name: "",
      phone: "",
      email: "",
    });
  };
  render() {
    let { name, phone, email } = this.state;
    return (
      <div className="input-label" style={{ display: "grid" }}>
        <label>
          Name &nbsp;
          <input
            type="text"
            value={name}
            onChange={(e) => this.handleOnChangeId(e)}
          />
        </label>
        <label>
          Phone &nbsp;
          <input
            type="text"
            value={phone}
            onChange={(e) => this.handleOnChangePhone(e)}
          />
        </label>
        <label>
          Email &nbsp;
          <input
            type="text"
            value={email}
            onChange={(e) => this.handleOnChangeEmail(e)}
          />
        </label>
        <button
          onClick={() => this.handleAddStudent()}
          style={{
            color: "white",
            background: "#02b702",
            margin: "10px",
            padding: "10px",
            borderRadius: "25px",
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
