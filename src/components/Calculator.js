import React, { Component } from 'react';
import { Form,Header } from 'semantic-ui-react';


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
			</div>
		)
	}

}

export default Calculator;