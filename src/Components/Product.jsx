import { FavoriteBorderOutlined, HearingOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex:1;
margin: 5px;
min-width:280px;
height:350px;
display: flex;
align-items:center;
justify-content: center;
background-color: #ecf4f7;
position:relative;
`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius:50%;
background-color:white;
position:absolute;
`
const Image = styled.img`
height:75%;
width:80%;
object-fit:cover;
z-index:2;

`
const Info = styled.div`
opacity:0;
width: 100%; 
height:100%;
position:absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.2);
z-index:3;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    opacity:1;
    transition: all 0.5s linear;
}
`
const Icon = styled.div`
margin: 5px;
width: 40px;
height: 40px;
border-radius: 50%;
background-color:white;
display: flex;
align-items: center;
justify-content: center;
transition:all 0.5s ease;

&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
    
}
`
export default function Product({ item }) {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>

            </Info>
        </Container>
    )
}