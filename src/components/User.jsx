// Functional component

export default function User({ name }) {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Bengaluru</h3>
      <h4>Instagram: @aks__g</h4>
    </div>
  );
}
