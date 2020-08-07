import React from "react";
import ReactDOM from "react-dom";

import CountriesSummary from "./CountriesSummary";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countries: [] };
  }

  async componentDidMount() {
    const response = await fetch("https://api.covid19api.com/summary");
    const json = await response.json();
    this.setState({ countries: json.Countries });
  }

  render() {
    return (
      <div>
        <h1>Covid 19 Summary</h1>
        <div
          style={{
            paddingBottom: "20px",
          }}
        >
          A summary of new and total cases per country updated daily.
        </div>
        <CountriesSummary countries={this.state.countries} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
