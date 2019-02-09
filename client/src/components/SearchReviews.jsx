import React from "react";

class SearchReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  searchAction(e) {
    if (e.key === "Enter") {
      this.props.handleSearchInput(event.target.value);
      this.setState({
        value: event.target.value
      });
    }
  }

  render() {
    return (
      <div>
        <div className="search-bar form-inline">
          <input
            className="form-control"
            type="text"
            value={this.state.value}
            onKeyPress={this.searchAction.bind(this)}
          />
          <button className="btn">
            <span>Submit</span>
          </button>
        </div>
        <div className="dropdown-menu">
          <select name="" id="">
            <option value="Most relevant">Most relevant</option>
            <option value="Most recent">Most recent</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SearchReviews;
