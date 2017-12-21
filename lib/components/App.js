import React, { Component } from 'react';
import DataApi from '../DataApi';
import { data } from '../testData.json';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  render() {
    return (
      <div>
        <ArticleList
          authors={this.state.authors}
          articles={this.state.articles}
        />
      </div>
    );
  }
}

export default App;

// asyncFunc = () => {
//   return Promise.resolve(37);
// };
//
// async componentDidMount() {
//   this.setState({
//     answer: await this.asyncFunc()
//   });
// }
