import React, {Component} from 'react'
import './OptionsList.css'
import RouteLink from '../components/RouteLink'

class OptionsList extends Component {
    constructor(props) {
        super(props);

        this.optionsArray = this.props.optionsList.map((option,i) => {
            return(
                <li key={i} className='litem'>
                <RouteLink 
                    text={option.text}
                    routeFunction={this.props.routeFunction}
                    newRoute={option.newRoute}
                />
                </li>
            )
        })
    }

    render() {
        return(
            <ul id='oList'>
                {this.optionsArray}
            </ul>
        )
    }
}

export default OptionsList;