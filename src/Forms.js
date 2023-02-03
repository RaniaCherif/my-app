import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StyleForms.css";

function Forms() {
  return (
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required=""></input>
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required=""></input>
          <label>Password</label>
        </div>
        <a href="#">Submit</a>
      </form>
    </div>
  );
}

export default Forms;
