/*
 * Landing page
 */

import React from 'react';
import { connect } from 'react-redux';
import { setAge, setWeight} from '../../redux/actions/calculatorActions';
import { Button, Container, Grid, Header, Input, Divider, Segment } from 'semantic-ui-react';

class Calculator extends React.Component {
  static getInitialProps({store}) {}

  constructor(props) {
    super(props);
  }


  render() {
    const { sessionId, patientSex, patientHeightFormatted, patientWeightFormatted, patientBirthDate } = this.props;
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
              <Button active={patientSex === 'female'}>Female</Button>
              <Button active={patientSex === 'male'}>Male</Button>
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
              value={patientBirthDate}
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
              value={patientWeightFormatted}
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
              value={patientHeightFormatted}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Segment>
      </Container>
    );
  }
}

const formatInitialProps = props => ({ ...props });


const mapStateToProps = state => ({
  stats: state.stats.value
});

const mapDispatchToProps = {
  setAge: setAge,
  setWeight: setWeight,
};

Calculator.getInitialProps = async ({ req, query }) => {
  const {  
    patientBirthDate,
    patientSex,
    patientHeightFormatted,
    patientWeightFormatted,
    sessionId } = query;
  return formatInitialProps({
    patientBirthDate,
    patientSex,
    patientHeightFormatted,
    patientWeightFormatted,
    sessionId
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
