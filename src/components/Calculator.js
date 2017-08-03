import React, { Component } from 'react';
import { Form,Header,Table,Label } from 'semantic-ui-react';

var ethereumStats = {"blockTime":11.90625,"difficulty":58538976908480,"priceUsd":10.0876,"lastupdate":1467959742};
var nethash = (ethereumStats.difficulty / ethereumStats.blockTime) / 1e9;
class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hashrate: '',
      networkhashrate : nethash,
      blockTime : ethereumStats.blockTime,
      ethPrice : ethereumStats.priceUsd
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({hashrate: event.target.value});
  }


	render() {
		return (
			<div>
				<Header as='h2'>Ethereum Mining Profitability Calculator</Header>
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
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Hour</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Day</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Week</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Month</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Year</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>

            </Table.Body>
          </Table>
			</div>
		)
	}

}

export default Calculator;