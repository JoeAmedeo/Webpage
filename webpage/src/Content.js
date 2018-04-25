import React, { Component } from 'react';
import './Content.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Content extends Component {

    render(){
        return(
        <div className="panel-group col-xs-8">
            {
                this.props.entries.map( (entry) =>
                    <div className="panel-default">
                        <div className="panel-heading heading">
                            {entry.title}
                        </div>
                        <div className="panel-body body">
                            {entry.body}
                        </div>
                    </div>
                )
            }
        </div>
        );
    };

}

export default Content