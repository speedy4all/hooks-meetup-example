import React from "react";
import { Link } from "@reach/router";
import { fetchCat } from "./cat-services-provider";

export default class CatInfoClass extends React.Component {
  controller = null;
  renders = 1;
  state = {
    cat: null
  };

  doFetchCat = () => {
    if (this.controller) {
      this.controller.abort();
    }
    this.controller = new AbortController();
    fetchCat(this.props.type, { signal: this.controller.signal }).then(cat =>
      this.setState({ cat })
    );
  };

  componentDidMount() {
    this.doFetchCat();
  }

  componentWillUnmount() {
    if (this.controller) {
      this.controller.abort();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.type !== prevProps.type) {
      this.doFetchCat();
    }
  }

  render() {
    const { cat } = this.state;
    console.log(`%c renders: ${this.renders++}`, "color: #bada55");
    if (!cat) {
      return null;
    }

    return (
      <div>
        <Link to="/">Back to list</Link>
        <div>
          <h4>{cat.name}</h4>
          <div>
            <span>Related breeds</span>
            {cat.related.map(r => (
              <div key={r}>
                <Link to={`/services/${r}`}>{r}</Link>
              </div>
            ))}
          </div>
          <img
            src={cat.url}
            alt={cat.name}
            style={{ width: 200, height: 200 }}
          />
          <p>{cat.description}</p>
        </div>
      </div>
    );
  }
}
