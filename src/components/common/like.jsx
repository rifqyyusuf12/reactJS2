import React, { Component } from 'react';

//input : boolean
//output : onClick

// const Like = props => { 
//     let classes = "fa fa-heart";
//     if (!props.liked) classes += "-o"; //apabila this props liked itu false akan nambah -o
//         return (
//         <i 
//         onClick={props.onClick} 
//         style={{ cursor: "pointer" }}
//          className={classes} 
//          aria-hidden="true"
//          />
//         );
//         };

//         export default Like;
 
        //perbedaan mengggunakan sfc = fungtional (diatas) dan cc = class (dibawah)


class Like extends Component {
    render() { 
        let classes = "fa fa-heart";
        if (!this.props.liked) classes += "-o"; //apabila this props liked itu false akan nambah -o
        return (
        <i 
        onClick={this.props.onClick} 
        style={{ cursor: "pointer", color: "red"}}
         className={classes} 
         aria-hidden="true"
         />
        );
    }
}
 
export default Like;