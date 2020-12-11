import React , {Component} from 'react'

// Collection 
import {Article} from '../Collections/Article';

// Method 
import '../Methods/NewArticle_Method'

import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';


import ArticleComponent from './ArticleComponent'
class IndexCom extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title : ''
         }
    }
    TitleHandel(e){
        this.setState({
            title : e.target.value
        })
    }

    FormHandel(e){
        e.preventDefault();
        Meteor.call('NewArticle',this.state,(err,res)=>{
            if (err) {
                console.log(err);
            }
            if(res){
                console.log(res);
            }
        })
        this.setState({
            title:''
        })
    }
    render() { 
        return (

            <div className='p-5 mt-5'>

                <h3 className='text-center'>Create New Article</h3>
                <div className='row'>
                    <form className='col-12' onSubmit={this.FormHandel.bind(this)}>
                        <input onChange={this.TitleHandel.bind(this)} value={this.state.title} className='form-control' type='text' placeholder='title'></input>
                        <button className='btn btn-success form-control mt-3' type='submit'>submit</button>
                    </form>
                </div>

                <div className='mt-5'>
                    <h3 className='text-center'>Article</h3>
                    {this.props.loading
                                    
                        ?  
                            'Loading'
                        : 
                        
                        this.props.data.map((article , index) => <ArticleComponent key={index} _id={article._id} title={article.title} /> )

                    }
                </div>

            </div>
         );
    }
}
 
const Index = withTracker(() => {
    const handle = Meteor.subscribe('Articles');
    const loading = !handle.ready();
    const data =  Article.find().fetch();
    return {
        data ,
        loading
    };
})(IndexCom);
export default Index;