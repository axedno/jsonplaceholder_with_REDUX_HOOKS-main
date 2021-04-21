import React, {useState} from 'react';
import {bindActionCreators} from "redux";
import {handleClick} from "../../../../action/actionSearchByName";
import {connect} from "react-redux";
import  { Button } from "react-bootstrap";
import {Link} from "react-router-dom";



const Navigation = ({handleClick}) => {

    const [heron, setHeron] = useState('');


    const render = () => {
        return   <div className='navigation'>
            <input className='navigation__input' type='text'
                   value={heron}
                   onChange={(e) => setHeron(e.target.value)}
                   placeholder='user Name'/>
            <div className='navigation__btn'>
                <Link to={`/name/${heron}`} >
                    <Button   onClick={() => handleClick(heron)}   variant="warning">Send</Button>
                </Link>
                <Link to={'create-new-post'}>
                    <Button variant="primary">New Post</Button>
                </Link>
            </div>
        </div>
    }


    return (
        <div>
            {render()}
        </div>

    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({handleClick}, dispatch)
}



export default connect(null, mapDispatchToProps) (Navigation);

