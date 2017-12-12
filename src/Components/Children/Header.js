import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from "./../../ducks/reducer";
import { IconButton, IconMenu, MenuItem, AppBar } from 'material-ui';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

class Header extends Component {
    render() {
        return (
            <section>
                <AppBar
                    title="FlashToolkit"
                    // Shows the delete icon next to the title
                    showMenuIconButton={false} // Shows the hamburger menu on the left of the title
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                                <IconButton><ContentFilter /></IconButton>
                            }
                            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                            maxHeight={300}>
                            <MenuItem> <Link to='/home'>Home</Link> </MenuItem>
                            <MenuItem> <Link to='/search'>Search</Link></MenuItem>
                            <MenuItem> <Link to={`/my-decks/${this.props.userData.userId}`}>My Decks</Link></MenuItem>
                            <MenuItem><Link to={`/favorites/${this.props.userData.userId}`} >My Favorites</Link> </MenuItem>
                            <MenuItem><a href={process.env.REACT_APP_LOGOUT}><div>Log Out</div></a></MenuItem>
                        </IconMenu>
                    }
                />

            </section>
        )
    }
}
function mapStateToProps(state) {

    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps, { getUser })(Header);
