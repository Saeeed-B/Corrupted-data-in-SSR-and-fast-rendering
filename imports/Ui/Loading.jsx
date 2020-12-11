import React , {Component} from 'react';

class Loading extends Component {
    render() { 
        return ( 
            <div id="loading">
                <section className="wrapper dark" style={{height: "100vh" ,width: "100%" , display: "flex"}}>
                    <div className="spinner">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Loading;