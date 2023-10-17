/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */

export const App = ({
  name,
  types,
}) => {
  return (
    <div className="App">
      <p>
        <span>Name:</span>
        {name}
      </p>
      <p>
        <span>Type:</span>
        {types}
      </p>
      <p>Pokemon goes here</p>
    </div>
  );
};

App.defaultProps = {
  name: "Name missing",
  types: "Not available",
};