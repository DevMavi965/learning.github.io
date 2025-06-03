import React from 'react'
import PropTypes from 'prop-types';

export default function Footer(props){
  return(
    <div className='text-bg-success'>
        <h2 className="titleof">{props.heading} </h2>
        <b className='btn btn-info'><a href="/">{props.author} </a></b>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, ex eius. Inventore facilis fuga vitae porro deserunt nemo, consequatur corporis optio. Cumque ut ipsa expedita architecto quos consectetur unde perferendis.</p>
    </div>
  );
}
Footer.propTypes={
    heading:PropTypes.string.isRequired,
    author:PropTypes.string
}
Footer.defaultProps={
    heading:'plz set heading',
    author:'no author'
}