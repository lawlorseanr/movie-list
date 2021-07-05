import React from 'react';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <form>
        <input
          type="text"
          id="searchText"
          onChange={
            () => this.props.onChange(document.getElementById('searchText').value)
          }
          value={this.props.search}></input>
        <button
          onClick={() => this.props.onSubmit()}>Go!</button>
      </form>
    );
  }
};


export default SearchForm;