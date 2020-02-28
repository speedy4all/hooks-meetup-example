/* eslint-disable */
<div>
  <span>Related</span>
  {cat.related.map(r => (
    <div key={r}>
      <Link to={`/services/${r}`}>{r}</Link>
    </div>
  ))}
</div>;
