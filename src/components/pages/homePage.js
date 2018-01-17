import React, { Component } from 'react';
import {Button, Icon, Form} from 'semantic-ui-react'
import TextArea from 'semantic-ui-react/dist/commonjs/addons/TextArea/TextArea';
class Homepage extends Component {
  constructor(props){
    super(props)
    this.state = {
      textValue: '',
    }
  }


  onClick = (event) => {
    var str = this.state.textValue;
    alert(str.replace("Microsoft", "Microsoft got replaced"))
  }

  render() {
    return (
       <div className="container-fluid">
       <h1>
           Homepage Content
        </h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        <Button onClick={this.handleClick}>Hi</Button>
        
        <Form>
        <Form.TextArea onChange={(e) => this.setState({textValue: e.target.value})}
              value={this.state.textValue} label='About' placeholder='Füge deinen Text hier ein...' />
        <Form.Checkbox label='I stimme dem Blabal zu' />
        <Form.Button onClick={this.onClick}>Text Gendern!</Form.Button>
        </Form>
       </div>
    );
  }
}

export default Homepage;
