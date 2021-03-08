import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import BookDetail from './component/BookDetail';
import BookList from './component/BookList';
import { inject, observer } from 'mobx-react';

@inject("BookStore") // index.js에서 props로 넘어오는 BookStore 데이터를 inject 해달라는 의미
@observer
class App extends Component {
  render() {
    return (
      <Grid columns={ 2 }>
        <Grid.Row>
          <Grid.Column>
            <BookList />
          </Grid.Column>
          <Grid.Column>
            <BookDetail />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;