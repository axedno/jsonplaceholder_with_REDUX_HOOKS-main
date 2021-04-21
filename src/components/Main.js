import React, {useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import RenderPosts from "./RenderPosts/RenderPosts";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getUser} from "../action/actionGetPosts";
import ErrorPage from "./ErrorPage/ErrorPage";
import RenderByName from "./RenderByName/RenderByName";
import NewPost from "./NewPost/NewPost";
import Comments from "./Comments/Comments";
import {getComments} from "../action/actionComments";



const Main = ({getUser, getComments}) => {


    useEffect(() => {
        getUser();
    }, [])


    useEffect(() => {
        getComments();
    }, [])



    return (
        <div>
                <Switch>
                    <Route path={['/', '/posts']} exact  component={RenderPosts}/>
                    <Route path= {`/name/:hero`} exact component={RenderByName}/>
                    <Route path={`/create-new-post`} exact component={NewPost}/>
                    <Route path= {`/comments/:numb`} exact component={Comments}/>
                     <Route><ErrorPage/></Route>
                </Switch>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getUser, getComments}, dispatch)
}



export default connect(null, mapDispatchToProps) (Main);
