import { directive } from '@babel/types';
import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Search = () => {

    const formStyle = {
        fontSize : '45px',
        border : 'none',
        textDecoration : 'none',
        // color : '#5769A9',
        // not working at the moment for some reason
        outline : 'none',
        // backgroundColor : '#F4F4F4'

    }

const searchHr = {
    width : 'inherit',
    height: '3px',
    backgroundColor: '#5769A9',
}

const searchLogo = {
    alignSelf:'center',
}
  return (
    <div >
        
        
        <InputGroup  >
        <i class="fa fa-search fa-2xl" aria-hidden="true" style={searchLogo}></i>
        <Form.Control
        placeholder="Subject Code"
        aria-label="Subject Code"
        // aria-describedby="basic-addon2"
        style={formStyle}
        />
        <hr style={searchHr}/>
        
        </InputGroup>
    </div>
  )
}

export default Search