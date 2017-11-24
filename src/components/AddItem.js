import React, {Component} from 'react';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    return (<div className="container">
      <form onSubmit={this.onSubmit}>
        <label>
          Add Item:
          <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"/>
        </label>
        <input type="submit" value="Submit" className="btn btn-primary"/>
      </form>
    </div>);
  }
}

export default AddItem;
