import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';
import "./style.css"
import Posts from '../Posts';

const limiT = 10;
function ListOfProducts() {
    
        const params = useParams();
        let page = params.page || 1;
        const [posts, setPosts] = useState([])
        page = parseInt(page);
        const [totalPosts, setTotalPosts] = useState();
        const totalPages = Math.ceil(totalPosts / limiT);
    
        useEffect(() => {
            axios.get('http://localhost:3000/top100Films?', {
                params : {
                    _page: page,
                    _limit: 10
                }
            }).then(response => {
                setPosts(response.data);
                setTotalPosts(response.headers["x-total-count"]);
            }).catch(error => {
                console.log(error);
              })
        }, [page])
        
    
        return (
        <div>
            <Posts posts={posts}/>
            <div className="d-flex justify-content-center gap-5 mt-5">
                <Button 
                    className="color"
                    component={Link}
                    to={'/Boovies/MoviesList/' + (page - 1)}
                    disabled={page <= 1}
                    aria-disabled="true"
                >
                    უკან
                </Button>
                <Button
                    className={`disabled === true ? "color" : "color"`}
                    component={Link}
                    to={'/Boovies/MoviesList/' + (page + 1)}
                    disabled={page >= totalPages}
                >
                    შემდეგი
                </Button>
            </div>
        </div>
        )
    }

export default ListOfProducts;
