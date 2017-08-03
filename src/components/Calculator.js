import React, { Component } from 'react';
import { Form,Header,Table,Label,Grid,Container,Divider } from 'semantic-ui-react';

var ethereumStats = {
  "blockTime":11.90625,
  "difficulty":58538976908480,
  "priceUsd":10.0876,
  "lastupdate":1467959742
};
var nethash = (ethereumStats.difficulty / ethereumStats.blockTime) / 1e9;
class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      earnings :{
        min : 0,
        hour : 0,
        day : 0,
        week : 0,
        month : 0,
        year : 0
      },
      hashrate: '',
      networkhashrate : nethash,
      blockTime : ethereumStats.blockTime,
      ethPrice : ethereumStats.priceUsd
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({hashrate: event.target.value});
    
    var userRatio = this.state.hashrate * 1e6 / (this.state.networkhashrate * 1e9);
    console.log(userRatio)
    var blocksPerMin = 60.0 / this.state.blockTime;
    var ethPerMin = blocksPerMin * 5.0;
    var earnings = {}
    earnings.min = userRatio * ethPerMin;
    earnings.hour = earnings.min * 60;
    earnings.day = earnings.hour * 24;
    earnings.week = earnings.day * 7;
    earnings.month = earnings.day * 30;
    earnings.year = earnings.day * 365;

     this.setState({earnings: earnings});
  }


	render() {
		return (
			<Container>
      <Divider horizontal></Divider>
				<Header as='h2'>Ethereum Mining Profitability Calculator</Header>

         <Divider horizontal>~</Divider>

          <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <Form>
          <Header as='h3'>Calculator</Header>
            <Form.Field>
                <label>Enter hashrate</label>
                <input placeholder='Your hashrate in MH per s' value={this.state.hashrate} onChange={this.handleChange}/>
            </Form.Field>

            <Form.Field>
                <label>Network hashrate</label>
                <input placeholder='Network hashrate' value = {this.state.networkhashrate} readOnly/>
            </Form.Field>

            <Form.Field>
                <label>Blocktime</label>
                <input placeholder='Block time' value={this.state.blockTime} readOnly/>
            </Form.Field>

            <Form.Field>
                <label>1 ETH price</label>
                <input placeholder='ETH Price' value={this.state.ethPrice} readOnly />
            </Form.Field>
          </Form>
      </Grid.Column>
      <Grid.Column width={8}>
                  <Header as='h3'>Earnings(ETH)</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Period</Table.HeaderCell>
                <Table.HeaderCell>ETH</Table.HeaderCell>
                <Table.HeaderCell>USD</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>

              <Table.Row>
                <Table.Cell>
                  <Label>Minute</Label>
                </Table.Cell>
                <Table.Cell>{this.state.earnings.min}</Table.Cell>
                <Table.Cell>$ {this.state.earnings.min * this.state.ethPrice}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Hour</Table.Cell>
                <Table.Cell>{this.state.earnings.hour}</Table.Cell>
                <Table.Cell>$ {this.state.earnings.hour * this.state.ethPrice}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Day</Table.Cell>
                <Table.Cell>{this.state.earnings.day}</Table.Cell>
                <Table.Cell>$ {this.state.earnings.day * this.state.ethPrice}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Week</Table.Cell>
                <Table.Cell>{this.state.earnings.week}</Table.Cell>
                <Table.Cell>$ {this.state.earnings.week * this.state.ethPrice}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Month</Table.Cell>
                <Table.Cell>{this.state.earnings.month}</Table.Cell>
                <Table.Cell>$ {this.state.earnings.month * this.state.ethPrice}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Year</Table.Cell>
                <Table.Cell>{this.state.earnings.year}</Table.Cell>
                <Table.Cell>$ {this.state.earnings.year * this.state.ethPrice}</Table.Cell>
              </Table.Row>

            </Table.Body>
          </Table>
      </Grid.Column>
    </Grid.Row>

    </Grid>



			</Container>
		)
	}

}

export default Calculator;