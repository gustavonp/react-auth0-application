import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      textAlign: "left"
    },
    
    avatar: {
      backgroundColor: red[500],
      width: theme.spacing(7),
      height: theme.spacing(7),
    },

  }));
  
  function RecipeReviewCard(props) {
    const classes = useStyles();

    const { profile } = props;
    
      return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" alt="Profile pic" className={classes.avatar} src={profile.picture}>
              {profile.name.substring(1, 0)}
            </Avatar>
          }
          title={profile.name}
          subheader={profile.nickname}
        />
        <CardContent>
          <table>
            <thead>
                <tr>
                    <td>Information</td>
                    <td>Data</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Email verified</td>
                    <td>{profile.email_verified ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                    <td>Scope</td>
                    <td>{profile['http://localhost:3000/roles']}</td>
                </tr>
            </tbody>
          </table>


        </CardContent>
      </Card>
    );
  }

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
                <center>
                    <RecipeReviewCard profile={profile} />
                </center>
            </div>
        );
    }
}

export default Profile;