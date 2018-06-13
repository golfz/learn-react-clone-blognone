import React, { Component } from 'react'
import './blognone.css'
import Header from './Header'
import TopNav from './TopNav'
import News from './News'
import Footer from './Footer'
import Login from './Login'
import RightItem from './RightItem'
import Pagination from './Pagination'

class Blognone extends Component {
  render() {
    return (
      <div>
        <Header />
        <TopNav />
      
        <div id="content" className="wrap-center">
      
          <div id="content-left">
            <News />
            <News />
            <News />
            <Pagination />
          </div>
      
          <div id="content-right">
            <Login />
            <RightItem />
          </div>
      
          <div style={{clear: "both"}} />
      
        </div>
      
        <Footer />
      
      </div>
    )
  }
}

export default Blognone