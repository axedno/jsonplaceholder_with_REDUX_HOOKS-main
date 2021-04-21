import React, {useState} from 'react';
import {editTask} from "../../../action/actionEdit";
import {connect} from "react-redux";
import styled from "styled-components";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {Delete} from "../../../action/actionDelete";
import {Check} from "../../../action/actionComments";




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
                    <Link to={`/comments/${props.children[1].props.children}`}>
                        <Button   onClick={() =>  props.Check(props.children[1].props.children)} variant="success" >Comments</Button>
                    </Link>
                    <Button onClick={() => setIsEdit(true)} variant="secondary" >Edit</Button>
                    <Button onClick={() => props.Delete(props.children[1].props.children)} variant="primary">Delete</Button>
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



const mapDispatchToProps = dispatch => {
    return bindActionCreators({editTask, Delete, Check}, dispatch)
}


export default connect(null, mapDispatchToProps)(Task);