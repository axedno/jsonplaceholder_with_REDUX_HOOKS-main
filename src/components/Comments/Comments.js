import React from 'react';
import {useSelector} from "react-redux";
import {payloadCheckComments} from "../../reselect/selectComments";



import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";



const Block = styled.div`
        text-align: center;
        margin-top: 10px;
           p {
             :hover {
                color: ${props => props.colored ? 'blue' : 'black'}
             }
`
const Delimetr = styled.div`
         background-color: var(--color);
         height: 1px;
`
const BTN = styled.div`
        display: flex;
        justify-content: center;
        margin: 50px auto;    
`



const Comments = () => {

    const comments = useSelector(payloadCheckComments);

    const printComments = () => {

        return (
            comments.map(item => {
                    return (
                            <Block key={item.id} colored>
                                <Delimetr></Delimetr>
                                <div>
                                    <p>{item.postId}</p>
                                    <p>{item.id}</p>
                                    <p>{item.name}</p>
                                    <p>{item.body}</p>
                                    <p>{item.email}</p>
                                </div>
                            </Block>
                    )
            })
        )
    }

    return (
        <div>
            {printComments()}
            <Link to={"/posts"}>
                <BTN>
                    <Button  variant="outline-dark">Back</Button>
                </BTN>
            </Link>
        </div>
    );
};





export default Comments;

