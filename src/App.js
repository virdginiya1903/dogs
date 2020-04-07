import React from "react";
import "./App.css";
import { fetchDog } from "./Action";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    console.log(this.props.url);
    return (
      <div>
        <button onClick={() => fetchDog(this.props.dispatch)}>
          Хочу собаку
        </button>
        <div>
          <img src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  url: state.url,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(App);
