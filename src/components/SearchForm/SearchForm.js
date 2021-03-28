import React, { Component } from 'react';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleInputValue = e => {
    this.setState({
      query: e.currentTarget.value,
    });
  };

  handleSubmin = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <form className={styles.SearchForm}>
        <button
          type="submit"
          className={styles.SearchFormButton}
          onClick={this.handleSubmin}
        >
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          name="search"
          value={this.state.query}
          placeholder="Search movies"
          onChange={this.handleInputValue}
        />
      </form>
    );
  }
}

export default SearchForm;
