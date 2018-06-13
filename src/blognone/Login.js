import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div id="login">
        <h3>Sign in</h3>
        <ul>
          <li>ลงทะเบียน</li>
          <li>ลืมรหัสผ่าน</li>
        </ul>
        <table>
          <tr>
            <td>Username:</td>
            <td>Password:</td>
            <td></td>
          </tr>
          <tr>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><span>Log in</span></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Login