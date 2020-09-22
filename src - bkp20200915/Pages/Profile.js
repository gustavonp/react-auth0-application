import React, { Component } from 'react';

class Profile extends Component {
    state = {
        profile : null,
        error : ""
    };

    componentDidMount() {
        this.loadUserProfile();
    }

    loadUserProfile() {
        this.props.auth.getProfile((profile, error) => this.setState({profile, error}));
    }

    render() {
        const { profile } = this.state;
        if(!profile) return null;
        return (
            <div className="callout">
              <h1>Profile</h1>  
              <div className="primary callout">
                <p>{profile.nickname}</p>
                <img className="thumbnail" style={{ maxWidth: 100, maxHeight: 100}} src={profile.picture} alt="profile pic" />
                <pre>{JSON.stringify(profile, null, 2)}</pre>
              </div>
            </div>
        );
    }
}

export default Profile;