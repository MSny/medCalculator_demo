import React from 'react';
import { connect } from 'react-redux';
import { setAge, setWeight} from '../../redux/actions/calculatorActions';
import { Button, Container, Grid, Header, Input, Divider, Segment } from 'semantic-ui-react';

function calculate_age(dob) { 
  const diff = Date.now() - dob.getTime();
  const age_diff = new Date(diff); 

  return Math.abs(age_diff.getUTCFullYear() - 1970);
}

class Calculator extends React.Component {
  static getInitialProps({store}) {}

  constructor(props) {
    super(props);
    const { sessionId, patientSex, patientHeightFormatted, patientWeightFormatted, patientBirthDate } = props;

    const dateYearMonthDayArray = patientBirthDate.split('-', 3);
    const formattedBirthDate = new Date(dateYearMonthDayArray);
    this.state = {
      currentAge: calculate_age(formattedBirthDate),
      currentWeight: patientWeightFormatted,
      currentHeight: patientHeightFormatted,
      currentSex: patientSex,
      currentCreatine: '',
      sessionId
    }
  }

  handleValueChange = (element, field) => {
    this.setState({
      [field]: element.value,
    });
  }

  render() {
    const { currentAge, currentSex, currentHeight, currentCreatine, currentWeight, sessionId } = this.state; 

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
              <Button
                value='female'
                active={currentSex === 'female'}
                onClick={(event, element) =>
                  this.handleValueChange(element, 'currentSex')
                }
                >Female</Button>
              <Button 
                value='male' 
                active={currentSex === 'male'} 
                onClick={(event, element) =>
                    this.handleValueChange(element, 'currentSex')
                }
                >Male</Button>
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
              value={currentAge}
              onChange={(event, element) =>
                this.handleValueChange(element, 'currentAge')
              }
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
              value={currentWeight}
              onChange={(event, element) =>
                this.handleValueChange(element, 'currentWeight')
              }
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
              value={currentCreatine}
              onChange={(event, element) =>
                this.handleValueChange(element, 'currentCreatine')
              }
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
              value={currentHeight}
              onChange={(event, element) =>
                this.handleValueChange(element, 'currentHeight')
              }
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
