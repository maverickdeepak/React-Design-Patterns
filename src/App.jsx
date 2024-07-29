import RegularList from "./components/lists/RegularList";
import { author } from "./data/author";
import SmallAuthorListItems from "./components/author/SmallListItems";
import LargeAuthorListItems from "./components/author/LargeListItems";

function App() {
  return (
    <>
      <RegularList
        items={author}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItems}
      />
      <RegularList
        items={author}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItems}
      />
    </>
  );
}

export default App;
