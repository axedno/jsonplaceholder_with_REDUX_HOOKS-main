import React, {useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import RenderPosts from "./RenderPosts/RenderPosts";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getUser} from "../action/actionPaginGet";
import ErrorPage from "./ErrorPage/ErrorPage";



const Main = ({getUser}) => {


    useEffect(() => {
        getUser();
    }, [])




    return (
        <div>
                <Switch>
                     <Route path={['/', '/posts']} exact  component={RenderPosts}/>
                     <Route><ErrorPage/></Route>
                </Switch>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getUser}, dispatch)
}



export default connect(null, mapDispatchToProps) (Main);
