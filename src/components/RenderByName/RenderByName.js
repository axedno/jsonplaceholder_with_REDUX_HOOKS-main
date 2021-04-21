
import React, {useState} from 'react';
import {connect,  useSelector} from "react-redux";
import styled from 'styled-components';
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import {payloadNew} from "../../reselect/select";
import {bindActionCreators} from "redux";
import {editTask} from "../../action/actionEdit";
import {Delete} from "../../action/actionDelete";
import {Check} from "../../action/actionComments";



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

const BTNPost = styled.div`
         display: flex;
         justify-content: space-around;
         margin:40px auto;
`


const RenderByName = (props) => {


    const posts = useSelector(payloadNew);


    const render = posts.map(item =>{
        return (
                <Block colored key={item.id}>
                    <p>{item.userId}</p>
                    <p>{item.id}</p>
                    <Title>{item.title}</Title>
                    <Body>{item.body}</Body>
                    <BTNPost>
                        <Link to={`/comments/${item.id}`}>
                            <Button onClick={() =>  props.Check(item.id)} variant="success" >Comments</Button>
                        </Link>
                        <Button onClick={() => props.Delete(item.id)} variant="primary">Delete</Button>
                    </BTNPost>
                </Block>
        )
    })

    return (
        <div>
            <HOne colored>{props.payloadName}</HOne>
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ Delete, Check}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps) (RenderByName);
















