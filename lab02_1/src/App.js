import { Component } from "react";
import Main from './component/MainComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <Main dishes={this.state.dishes} />
    )
  }
}

export default App;
