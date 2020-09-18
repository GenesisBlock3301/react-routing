import React from 'react'
import Items from "./Items";

// import

class HomeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    image: require("./img/big_portfolio_item_3.jpg"),
                    detail: "Some quick example text to build on the card title and make\n" +
                        "                                        up the bulk of the card's content."
                },
                {
                    image: require("./img/big_portfolio_item_4.jpg"),
                    detail: "Some quick example text to build on the card title and make\n" +
                        "                                        up the bulk of the card's content."
                },
                {
                    image: require("./img/big_portfolio_item_5.jpg"),
                    detail: "Some quick example text to build on the card title and make\n" +
                        "                                        up the bulk of the card's content."
                },
                {
                    image: require("./img/big_portfolio_item_3.jpg"),
                    detail: "Some quick example text to build on the card title and make\n" +
                        "                                        up the bulk of the card's content."
                },
                {
                    image: require("./img/big_portfolio_item_4.jpg"),
                    detail: "Some quick example text to build on the card title and make\n" +
                        "                                        up the bulk of the card's content."
                },
                {
                    image: require("./img/big_portfolio_item_5.jpg"),
                    detail: "Some quick example text to build on the card title and make\n" +
                        "                                        up the bulk of the card's content."
                },
            ]
        }
    }

    render() {
        return (
            <div className='container' style={{marginTop: 80}}>
                {/*<div className="row">*/}
                    {/*<div className="col-4">*/}
                        {/*<div className="card" style={{width: 288}}>*/}
                            {/*<img className="card-img-top" src={require("./img/big_portfolio_item_3.jpg")} alt=""/>*/}
                            {/*<div className="card-body">*/}
                                {/*<p className="card-text">Some quick example text to build on the card title and make*/}
                                    {/*up the bulk of the card's content.</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <Items items={this.state.items}/>
            </div>
        )
    }
}

export default HomeApp