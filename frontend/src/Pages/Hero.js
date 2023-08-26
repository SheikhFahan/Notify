import React from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Search from '../Components/Search';



const Hero = () => {

    const containerPadding = {
      padding : '2% 10%',
    }
    
  return (
    <div className='my-5 mx-auto' style={containerPadding} >
      <Row>
        <Col>
          <Image src="./Images/tag-line.png" fluid />
        </Col>
        <Col >
            <Search/>
          <Image src="./Images/gux+cat.png" fluid />
        </Col>
      </Row>
    </div>  
  )
}

export default Hero