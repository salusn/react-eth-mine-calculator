import React, { Component } from 'react';
import { Form,Header,Table,Label } from 'semantic-ui-react';


class Calculator extends Component {
	render() {
		return (
			<div>
				<Header as='h2'>Ethereum Mining Profitability Calculator</Header>
				<Form>
					<Header as='h3'>Calculator</Header>
    				<Form.Field>
      					<label>Enter hashrate</label>
      					<input placeholder='Your hashrate in MH per s' />
    				</Form.Field>

   	 				<Form.Field>
      					<label>Network hashrate</label>
      					<input placeholder='66207.56678163535' />
    				</Form.Field>

				    <Form.Field>
      					<label>Blocktime</label>
      					<input placeholder='22.625' />
    				</Form.Field>

    				<Form.Field>
      					<label>1 ETH price</label>
      					<input placeholder='221.53' />
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