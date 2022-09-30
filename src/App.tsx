import LargePersonListItem from './ListItem/people/LargePersonListItem';
import { people } from './ListItem/people/mocks/data';
import SmallPersonListItem from './ListItem/people/SmallPersonListItem';
import RegularList from './ListItem/RegularList';
import SplitScreen from './SplitScreen';

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={1}>
      <RegularList items={people} component={SmallPersonListItem} />

      <RegularList items={people} component={LargePersonListItem} />
    </SplitScreen>
  );
}

export default App;
