import React, { Component } from "react";
import { Link } from "react-router-dom";
export class CategoryNavigation extends Component {
    render() {
        return <React.Fragment>
            <Link className="btn btn-primary w-100 mb-3" to={ this.props.baseUrl }>All</Link><br/>
            { this.props.categories && this.props.categories.map(cat => 
            <div>
            <Link className="btn btn-primary w-100 mb-3" key={ cat } to={ `${ this.props.baseUrl }/${ cat.toLowerCase() }` }>{ cat }</Link>
            </div>
            ) }
        </React.Fragment>
    }
}