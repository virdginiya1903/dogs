import React from "react";
import "./App.css";
import { fetchDog } from "./Action";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => fetchDog(this.props.dispatch)}>
          Хочу собаку
        </button>
        <div>
          {
            this.props.loading ? (
              <div>loading </div>
            ) : this.props.error ? (
              <div>error</div>
            ) : (
              <div>
                <img src={this.props.url} alt="Картинка" />{" "}
              </div>
            )
            // console.log(this.props.url)
          }
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
