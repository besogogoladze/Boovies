// import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
// import Typography from '@mui/material/Typography';
import '../section1/style.css';


function Posts({posts}) {

  
    return (
        <div id="posts" className="d-inline-flex flex-wrap gap-5 w-100 container mx-auto">
            {posts.map((option) => 
                <div key={option.id}>
                    <Link className="color " key={option.id} to={`/Movies/${option.id}`}>
                        <div className="description">
                            <div className="description-toHide">
                                <img className="postImg w-100 h-320px border-radius-5" alt={option.title + " error "} src={option.image}/>
                            </div>
                            <div className="description-hidden">
                                <img className="w-100 h-320px absolute border-radius-5" alt={option.title + " error "} src={option.image}/>
                                <h1>{option.title}</h1>
                                <div className="d-flex flex-column gap-3 description-bg-color from-down">
                                    <h4>Description:</h4>
                                    <h6>{option.description.slice(0, 100) + "..."}</h6>
                                    <p>{option.year}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                
            )}
        </div>
    )
}

export default Posts;



{/* <Card className="w-300 description">
                            <CardActionArea className="description-toHide">
                                <CardMedia
                                className="description-hidden"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="p" component="p">
                                        {option.title}
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <img className="w-100 h-auto" src={option.image} alt="error" />
                                </CardContent>
                            </CardActionArea>
                            <CardContent className="w-100 description-toHide">
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {option.year}
                                </Typography>
                            </CardContent>
                            <CardActionArea>
                                <CardContent className="description-hidden">
                                    <Typography gutterBottom variant="p" component="p">
                                        {option.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> */}
