import React, {useState} from 'react';
import {editTask} from "../../../action/actionEdit";
import {connect} from "react-redux";
import styled from "styled-components";
import {Button} from "react-bootstrap";




const Block = styled.div`
        width: 22%;
        text-align: center;
        border: 1px solid blue;
        margin-top: 10px;
           p {
             :hover {
                color: ${props => props.colored ? 'red' : 'black'}
             }
   
`
const BTNPost = styled.div`
         display: flex;
         justify-content: space-around;
         margin:40px auto;
`
const Edit = styled.div`
         width: 22%;
         justify-content: space-around;
         border: 1px solid black;
         margin-top: 10px;
         display: flex;
         flex-direction: column;
         
         textarea{
              text-align: center;
         }
`

const Task = props => {

    const [isEdit, setIsEdit] = useState(false);

    const [value1, setValue1] = useState({});

    const onChangePage = (fild, value) => {
        setValue1(prevState => ({...prevState, [fild]: value }))
    }

    const returnNorm = () => {
        return (
            <Block>
                <div>{props.children}</div>
                <BTNPost>
                    <Button onClick={() => setIsEdit(true)} variant="secondary" >Edit</Button>
                </BTNPost>
            </Block>
        );
    };


    const returnEdit = () => {
        return (
            <Edit>
                <textarea onChange={(event) => onChangePage('userId', event.target.value)} defaultValue={props.children[0].props.children}></textarea>
                <textarea onChange={(event) => onChangePage('id', event.target.value)} defaultValue={props.children[1].props.children}></textarea>
                <textarea onChange={(event) => onChangePage('title', event.target.value)} defaultValue={props.children[2].props.children}></textarea>
                <textarea onChange={(event) => onChangePage('body', event.target.value)} defaultValue={props.children[3].props.children} ></textarea>
                <Button onClick={() => setIsEdit(false, props.editTask(props.index, value1))} variant="danger">Create</Button>
            </Edit>
        );
    };

    if (isEdit) {
        return returnEdit();
    } else {
        return returnNorm();
    }

}

export const mapDispatchToProps = dispatch => {
    return {
        editTask: (index, text) => dispatch(editTask(index, text)),
    }
}

export default connect(null, mapDispatchToProps)(Task);