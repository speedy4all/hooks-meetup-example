import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { fetchCat } from "./cat-services-provider";
import { useCountRenders } from "./use-count-renders";

export default function CatInfo({ type }) {
  const [cat, setCat] = useState(null);
  useCountRenders();

  useEffect(() => {
    const controller = new AbortController();
    fetchCat(type, { signal: controller.signal }).then(cat => setCat(cat));

    return () => {
      console.log("rrr");
    };
  }, [type]);

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
        <img src={cat.url} alt={cat.name} style={{ width: 200, height: 200 }} />
        <p>{cat.description}</p>
      </div>
    </div>
  );
}
