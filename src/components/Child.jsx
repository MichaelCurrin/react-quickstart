export default function Child({ value, setValue }) {
  return (
    <div className="Child">
      <h3>Child component</h3>

      <div>
        <button onClick={() => setValue(456)}>Set to 456</button>
      </div>

      <p>Value: {value}</p>
    </div>
  );
}
