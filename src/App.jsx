import RegularList from "./components/lists/RegularList";

import { author } from "./data/author";
import { books } from "./data/books";

import SmallAuthorListItems from "./components/author/SmallListItems";
import LargeAuthorListItems from "./components/author/LargeListItems";

import { SmallBookListItem } from "./components/books/SmallListItems";
import { LargeBookListItem } from "./components/books/LargeListItems";

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
      <hr />
      <RegularList
        items={books}
        sourceName={"books"}
        ItemComponent={SmallBookListItem}
      />
      <RegularList
        items={books}
        sourceName={"books"}
        ItemComponent={LargeBookListItem}
      />
    </>
  );
}

export default App;
