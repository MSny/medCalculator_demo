/*
 * Landing page
 */

import React from 'react';
import { connect } from 'react-redux';
import { setAge, setWeight} from '../../redux/actions/calculatorActions';
import { Button, Container, Grid, Header, Input, Divider, Segment } from 'semantic-ui-react';
// import Router from 'next/router';

class Calculator extends React.Component {
  static getInitialProps({store}) {}

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <Container size="large" textAlign="center">
        <Header as="h2">MD Calc Demo</Header>
        <br />
        <Segment>
        <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h4">Sex</Header>
          </Grid.Column>
          <Grid.Column>
            <Button.Group>
              <Button>Female</Button>
              <Button>Male</Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
        <Divider section />
        <Grid.Row>
          <Grid.Column>
            <Header as="h4">Age</Header>
          </Grid.Column>
          <Grid.Column>
            <Input
              label={{ basic: true, content: 'years' }}
              labelPosition="right"
              placeholder="Enter age..."
            />
          </Grid.Column>
        </Grid.Row>
        <Divider section />
        <Grid.Row>
          <Grid.Column>
            <Header as="h4">Weight</Header>
          </Grid.Column>
          <Grid.Column>
            <Input
              label={{ basic: true, content: 'kg' }}
              labelPosition="right"
              placeholder="Enter weight..."
            />
          </Grid.Column>
        </Grid.Row>
        <Divider section />
        <Grid.Row>
          <Grid.Column>
            <Header as="h4">Creatinine</Header>
          </Grid.Column>
          <Grid.Column>
            <Input
              label={{ basic: true, content: 'mg/dl' }}
              labelPosition="right"
              placeholder="Enter creatinine..."
            />
          </Grid.Column>
        </Grid.Row>
        <Divider section />
        <Grid.Row>
          <Grid.Column>
            <Header as="h4">Height</Header>
          </Grid.Column>
          <Grid.Column>
            <Input
              label={{ basic: true, content: 'cm' }}
              labelPosition="right"
              placeholder="Enter height..."
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Segment>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.stats.value
});

const mapDispatchToProps = {
  setAge: setAge,
  setWeight: setWeight,
};

Calculator.getInitialProps = () => ({ custom: 'custom' });

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
