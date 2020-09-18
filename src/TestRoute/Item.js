import React from 'react'

const Item = (props) => {
    return (
        <div className="col-4">
            <div className="card" style={{width: 288}}>
                <img className="card-img-top" src={props.item.image} alt=""/>
                <div className="card-body">
                    <p className="card-text">{props.item.detail}</p>
                </div>
            </div>
        </div>
    )
};
export default Item;