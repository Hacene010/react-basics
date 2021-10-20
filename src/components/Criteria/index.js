import './style.css';

export default function Criteria() {
  return (
    <aside>
      <h2>Search Criteria</h2>
      <label htmlFor='fav-only'>
        Favorites only
        <input type='checkbox' name='fav-only' />
      </label>
      <label htmlFor='available-recipe'>
        Available Recipe
        <input type='checkbox' name='available-recipe' />
      </label>
      <label htmlFor='tags'>
        Tags
        <input type='search' name='tags' />
      </label>
    </aside>
  );
}
