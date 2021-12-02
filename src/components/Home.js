import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title= "Model S"
                description= "Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Lowest Cost solar panels in America"
                description="Money-Back Gurantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
        </Container>
    )
}

export default Home

const Container=styled.div`
    height:100vh;

`