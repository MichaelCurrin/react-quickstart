export default function Child({ value, setValue }) {
  return (
    <div className="Child">
      <h3>Child component</h3>

      <p>Value: {value}</p>

      <div>
        <button onClick={() => setValue(456)}>
          Set to 456
        </button>
      </div>
    </div>
  )
}
