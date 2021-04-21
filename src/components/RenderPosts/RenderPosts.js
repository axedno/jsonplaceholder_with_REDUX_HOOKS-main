import React, {useState} from 'react';
import {connect, useSelector} from "react-redux";
import Task from "./RenderPost/RenderPost";
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

const Blocks = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
`

const Title = styled.p`
         height: 40px;
`
const Body = styled.p`
        padding-top: 30px;
         height: 120px;
`




const RenderPosts = () => {


    const [pageNumber, setPageNumber] = useState(0);


    const payloadAll = useSelector(state => state.reducerPutEdit.payloadAll);

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;


    const render = payloadAll.slice(pagesVisited, pagesVisited + usersPerPage).map((item, index) => {

            return (
                        <Task key={index} index={index}>
                            <p>{item.userId}</p>
                            <p>{item.id}</p>
                            <Title>{item.title}</Title>
                            <Body>{item.body}</Body>
                        </Task>

            )
        }
    )




    const pageCount = Math.ceil(payloadAll.length / usersPerPage);

    const changePage =({selected}) => {
        setPageNumber(selected);
    };


    return (
        <div>
            <Blocks>
                {render}
            </Blocks>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    )

}


export default RenderPosts;