import React from 'react';
import { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentFilter: null,
      filters: [],
      fruit: []
    };
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit }));
  }

  updateFilter = (e) => {
    console.log('update filter to: ', e.target.value);
    this.setState({ currentFilter: e.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        onUpdateFilter={this.updateFilter} />
    );
  }
}

export default App;