import React, { Component } from 'react'

class Pagination extends Component {
  render() {
    return (
      <div id="pagination">
        <ul>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li className="disable">...</li>
          <li>next &gt;</li>
          <li>last &gt;&gt;</li>
        </ul>
      </div>
    )
  }
}

export default Pagination