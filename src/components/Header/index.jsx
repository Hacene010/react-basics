import './style.css';

export default function Header({ needle, setNeedle }) {
  return (
    <header>
      <h1>My awesome Recipes</h1>
      <input
        type='search'
        value={needle}
        onChange={(evt) => {
          setNeedle(evt.target.value);
        }}
      />
    </header>
  );
}
