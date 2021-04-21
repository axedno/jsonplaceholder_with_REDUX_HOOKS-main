import React, {useState} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {create} from "../../action/actionCreateNewPost";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from 'styled-components';


const CreateNewPost = styled.div`
      display: flex;
      justify-content: space-between;
      width: 60%;
      margin:60px auto;
      border: 1px solid blue;
      padding: 20px;
`
const BTNPost = styled.div`
         display: flex;
         justify-content: space-between;
         width: 20%;
         margin:0 auto;
`
const HOne = styled.h1`
        text-align: center;
        color: green;
        :hover {
                color: ${props => props.colored ? 'yellow' : 'green'}
             }
`



const NewPost = ({create}) => {


    const [value1, setValue1] = useState({});

    const onChangePage = (fild, value) => {
        setValue1(prevState => ({...prevState, [fild]: value }))
    }

    return (
        <div>
            <HOne colored>Create new post</HOne>
            <CreateNewPost>
                <textarea onChange={(event) => onChangePage('userId', event.target.value)} defaultValue={'userId'}></textarea>
                <textarea onChange={(event) => onChangePage('id', event.target.value)} defaultValue={'id'}></textarea>
                <textarea onChange={(event) => onChangePage('title', event.target.value)} defaultValue={'title'}></textarea>
                <textarea onChange={(event) => onChangePage('body', event.target.value)} defaultValue={'body'} ></textarea>
            </CreateNewPost>
            <BTNPost>
                <Link to={'/posts'}>
                    <Button   onClick={() => setValue1(create(value1))} variant="outline-primary">Create</Button>
                </Link>
                <Link to={"/posts"}>
                        <Button  variant="outline-dark">Back</Button>
                </Link>
            </BTNPost>
        </div>
    );
};


const mapDispatchToProps = dispatch => {
    return bindActionCreators({create}, dispatch)
}




export default connect(null, mapDispatchToProps) (NewPost);



