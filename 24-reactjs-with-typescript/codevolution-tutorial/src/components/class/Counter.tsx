import { Component, ReactNode } from 'react';

type CounterPropsType = {
  message: string;
};

type CounterStateType = {
  count: number;
};
export default class Counter extends Component<
  CounterPropsType,
  CounterStateType
> {
  state = {
    count: 0,
  };

  handleClick = (): void => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render(): ReactNode {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} - {this.state.count}
      </div>
    );
  }
}
