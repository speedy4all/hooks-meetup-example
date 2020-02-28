import React, { useContext } from "react";
import { CatContext } from "./cat-services-provider";
import { Link } from "@reach/router";

export default function CatInfoList() {
  const { services } = useContext(CatContext);

  return services.map(service => (
    <div className="d-flex align-items-center" key={service.id}>
      <h4>{service.name}</h4>
      <p>{service.description}</p>
      <div>
        <ul style={{ listStyle: "none" }}>
          {service.catTypes.map(type => (
            <li key={type}>
              <Link to={`/services/${type}`}>{type}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));
}
