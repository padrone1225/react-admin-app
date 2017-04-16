import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from 'react-router-dom'

import Icon from './Icon'

/**
 * This provides the navigation bar of the framework.  The navigation bar 
 * consists of an icon/toggle, title and notification icons.  The brand title
 * disappears for sm or smaller.  In its place a home icon will appear along
 * with the other notification icons.
 * 
 * There are 
 */
export default class Navbar extends React.Component {
    static propTypes = {
        /**
         * Module title
         */
        title: PropTypes.string.isRequired,
        /**
         * Module logo
         */
        title: PropTypes.string.isRequired,
        toggleSideNav: PropTypes.func.isRequired,
        /**
         * If true, then the small device navigation navbar is shown.
         */
        smallDeviceNavigation: PropTypes.bool.isRequired
    }
    render() {
        if (this.props.smallDeviceNavigation) {
            return (<nav className="navbar navbar-light bg-faded fixed-top" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggler navbar-toggler-left" aria-label="Toggle navigation" onClick={this.props.toggleSideNav}>
                        <span className="navbar-toggler-icon"></span></button>
                    <div className="pull-right">
                        <span className="pull-right"><a className="nav-link" href="#"><Icon name="user" fw /></a>
                        </span>
                        <span className="pull-right"><a className="nav-link" href="#"><Icon name="comment" fw /></a>
                        </span>
                        <span className="pull-right"><a className="nav-link" href="#"><Icon name="tasks" fw /></a>
                        </span>
                        <span className="pull-right"><a className="nav-link" href="#"><Icon name="envelope" fw /></a></span>
                    </div>
                </div>
            </nav>)
        } else {
            return (<nav className="navbar navbar-light bg-faded fixed-top" role="navigation">
                <div className="navbar-header">
                    <Link className="navbar-brand mr-auto" to="/"><img src={this.props.logo} srcSet={this.props.logo.srcSet} alt="" />{this.props.title}</Link>
                    <div className="pull-right">
                        <span className="pull-right"><a className="nav-link" href="#"><Icon name="user" fw /></a>
                        </span>
                        <span className="pull-right"><a className="nav-link" href="#"><Icon name="comment" fw /></a>
                        </span>
                        <span className="pull-right"><a className="nav-link" href="#"><Icon name="tasks" fw /></a>
                        </span>
                        <span className="pull-right"><a className="nav-link" href="#"><Icon name="envelope" fw /></a></span>
                    </div>
                </div>
            </nav>)
        }
    }
}
