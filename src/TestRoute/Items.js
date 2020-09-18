import React from 'react'
import Item from "./Item";

const Items = (props) => {
    return (
        <div >
            <div className='row'>
                {
                    props.items.map((item) => {
                        return (
                            <Item item={item}/>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default Items;