import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div className={'background-image'}>
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container columns={'3'}>

          <Grid.Column>
            <Icon name={'users'} inverted size={'huge'}/>
            <Header as={'h1'} inverted>Multiple Users</Header>
            <Header as={'h3'} inverted >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Header>
          </Grid.Column>

          <Grid.Column>
            <Icon name={'file alternate'} inverted size={'huge'}/>
            <Header as={'h1'} inverted>Details</Header>
            <Header as={'h3'} inverted >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Header>
          </Grid.Column>

          <Grid.Column>
            <Icon name={'calendar outline'} inverted size={'huge'}/>
            <Header as={'h1'} inverted>Timestamped Notes</Header>
            <Header as={'h3'} inverted >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Header>
          </Grid.Column>

        </Grid>
      </div>
    );
  }
}

export default Landing;
