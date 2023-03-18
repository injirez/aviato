import React from 'react'
import { Button, Form } from "react-bootstrap";

export const SearchBar = () => {
  return (
    <div className="main-searchbar">
       
        <Form className="d-flex">
        <img className='header-image' src = {require("./brand-aviato.svg").default}></img>
          <Form.Control
          style={{maxHeight: "40px", marginTop: "30px"}}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <Button  style={{maxHeight: "40px", marginTop: "30px"}} variant="outline-success">Search</Button>
        </Form>
      </div>
  )
}
