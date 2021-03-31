import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
    const { query } = this.state;

    this.props.onSubmit(this.state.query);
    // console.log(this.props);

    this.props.history.push({
      pathname: this.props.history.location.pathname,
      search: `q=${query}`,
      key: this.props.history.location.key,
    });

    // this.props.history.push({ ...this.props.history.location });

    this.setState({ query: '' });
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

export default withRouter(SearchForm);
