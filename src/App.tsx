import NumberedList from './ListItem/NumberedList';
import LargePersonListItem from './ListItem/people/LargePersonListItem';
import { people } from './ListItem/people/mocks/data';
import SmallPersonListItem from './ListItem/people/SmallPersonListItem';
import RegularList from './ListItem/RegularList';
import Modal from './Modal/Modal';
import SplitScreen from './SplitScreen';

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={1}>
        <Modal>
          <RegularList items={people} component={SmallPersonListItem} />
        </Modal>
        <NumberedList items={people} component={LargePersonListItem} />
      </SplitScreen>
    </>
  );
}

export default App;
