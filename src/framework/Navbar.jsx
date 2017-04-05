import React from 'react'
import {
    Link
} from 'react-router-dom'

import Icon from './Icon'

/**
 * This provides the navigation bar of the framework.  The navigation bar 
 * consists of an icon/toggle, title and notification icons.  The brand title
 * disappears for smaller than sm screens.
 */
class Navbar extends React.Component {
    static propTypes = {
        /**
         * Module title
         */
        title: React.PropTypes.string.isRequired
    }
    render() {
        return (<div className="navbar navbar-toggleable-sm navbar-light bg-faded fixed-top">
            <div className="navbar-header">
                <button type="button" className="navbar-toggler navbar-toggler-left" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span></button>
                <Link className="navbar-brand" to="/">{this.props.title}</Link>
            </div>
        </div>)
    }
}
export default Navbar
