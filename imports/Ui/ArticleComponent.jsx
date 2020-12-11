import React from 'react'
export default function ArticleComponent(props) {
    return (
        <div className='row alert alert-primary'>
            <p>
                title : {props.title}
                <br></br>
                _id :  {props._id}
            </p>
        </div>
    )
}