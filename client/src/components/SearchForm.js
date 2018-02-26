import React from "react";

const SearchForm = (props) => (
  <div className="search-form">
    <form className="text-center">
      <div className="form-group">
        <label htmlFor="topic">Topic</label>
        <input name="topic" className="form-control" onChange={props.handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="start_date">Start Date (YYYYMMDD)</label>
        <input name="start_date" className="form-control" onChange={props.handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="end_date">End Date (YYYYMMDD)</label>
        <input name="end_date" className="form-control" onChange={props.handleInputChange} />
      </div>
      <button onClick={props.handleOnSubmit} className="btn btn-primary btn-lg">Search</button>
    </form>
  </div>

);

export default SearchForm;