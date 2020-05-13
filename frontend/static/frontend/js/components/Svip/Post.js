import React, { Component } from 'react';
import {
    MDBTypography as Typography,
    MDBIcon as Icon,
    MDBBadge as Badge,
    MDBTable as Table,
    MDBTableBody as TableBody,
    MDBTableHead as TableHead,
    MDBContainer as Container
} from 'mdbreact';
import { withRouter } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import dateFormat from 'dateformat';
import JsxParser from 'react-jsx-parser';
import MathJax from 'react-mathjax';
import IFrame from 'react-iframe';
import Cite from './Cite';
import Figure from './Figure';
import MultiFigure from './MultiFigure';
import AreaFigure from './AreaFigure';
import Loading from '../Loading';
import './Svip.css';


export default withRouter(class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            post: [],
        };

        this.node = React.createRef();
    }

    componentDidMount() {
        let { postSlug } = this.props.match.params;
        let post = this.props.posts.find(post => (postSlug === post.slug));
        this.setState({ post, isLoaded: true });
    }

    render() {
        let { created } = this.state.post;
        created = dateFormat(created, 'HH:MM, d mmm yyyy');
        return (
            (!this.state.isLoaded)
                ? <Loading />
                : <div>
                    <Typography tag='h1'>{this.state.post.title}</Typography>
                    <Icon far icon='clock' className='mr-1 text-muted'></Icon>
                    <p className='text-muted d-inline'>{created}</p>
                    <div className='my-5' ref={this.node}>
                        <MathJax.Provider>
                            <JsxParser
                                bindings={{
                                    algo_data: [
                                        'spot', 'Sobel', 'Prewitt', 'Laplacian', 'Canny'
                                    ],
                                    shape_data: [
                                        'circle', 'square', 'trapezoid', 'triangle'
                                    ],
                                    mapNames: (prefix, shapes) => shapes.map((item, i) => `${prefix}_${item.toLowerCase()}`),
                                }}
                                components={{ React, MathJax, Image, Figure, Cite, IFrame, MultiFigure, AreaFigure, Table, TableBody, TableHead, Container }}
                                jsx={this.state.post.body}
                                />
                        </MathJax.Provider>
                    </div>
                    <div className='my-5'>
                        <Typography tag='h4'>Keywords</Typography>
                        {this.state.post.keywords.split(', ').map((keyword, i) => (
                            <Badge key={i} color='light' className='m-1'>{keyword}</Badge>
                        ))}
                    </div>
                </div>
        );
    }
})
