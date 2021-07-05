import React from 'react';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.search = '';

    this.handleSubmit = props.handleSubmit;
  }

  onChange(search) {
    var state = {};
    state.search = search;
    this.handleSubmit(search);
    this.setState(state);
  }

  onClick(event) {
    event.preventDefault();
    this.handleSubmit(this.state.search);
  }

  render() {
    return (
      <form>
        <input type="text"
          onChange={(e) => this.onChange(e.target.value)}
          value={this.state.search}>
        </input>
        <button
          type="submit"
          onClick={(e) => this.onClick(e)}>Go!</button>
      </form>
    );
  }
};


export default SearchForm;