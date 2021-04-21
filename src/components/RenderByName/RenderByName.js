
import React from 'react';
import {connect,  useSelector} from "react-redux";
import styled from 'styled-components';
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import {payloadNew} from "../../reselect/select";
import {bindActionCreators} from "redux";



const Block = styled.div`
        width: 22%;
        text-align: center;
        border: 1px solid goldenrod;
        margin-top: 10px;
        p {
             :hover {
                color: ${props => props.colored ? 'red' : 'black'}
             }  
        }
`

const Blocks = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    
`
const BTN = styled.div`
        display: flex;
        justify-content: center;
        margin: 50px auto;    
`
const HOne = styled.h1`
        text-align: center;
        color: green;
        :hover {
                color: ${props => props.colored ? 'blue' : 'green'}
             }
`
const Title = styled.p`
         height: 40px;
`
const Body = styled.p`
         height: 120px;
`



const RenderByName = ({ payloadName, Check, Delete}) => {


    const posts = useSelector(payloadNew);



    const render = posts.map(item =>{
        return (
            <Block colored key={item.id}>
                <p>{item.userId}</p>
                <p>{item.id}</p>
                <Title>{item.title}</Title>
                <Body>{item.body}</Body>
                <Link to={`/comments/${item.id}`}>
                    <Button onClick={() =>  Check(item.id)} variant="success" >Comments</Button>
                </Link>
                <Button onClick={() => Delete(item.id)} variant="primary">Delete</Button>
            </Block>
        )
    })

    return (
        <div>
            <HOne colored>{payloadName}</HOne>
            <div className='renderAll'>
                <Blocks>
                    {render}
                </Blocks>
                <Link to={"/posts"}>
                    <BTN>
                        <Button  variant="outline-dark">Back</Button>
                    </BTN>
                </Link>
            </div>
        </div>

    );
};



const mapStateToProps = state => {
    return {
        payloadName: state.reducerFilter.payloadName
    }
}

export default connect(mapStateToProps) (RenderByName);
















