import NumberedList from '../LayouComponents/ListItem/NumberedList';
import LargePersonListItem from '../LayouComponents/ListItem/people/LargePersonListItem';
import { people } from '../LayouComponents/ListItem/people/mocks/data';
import SmallPersonListItem from '../LayouComponents/ListItem/people/SmallPersonListItem';
import RegularList from '../LayouComponents/ListItem/RegularList';
import Modal from '../LayouComponents/Modal/Modal';
import SplitScreen from './SplitScreen/SplitScreen';

export default function LayoutComponents() {
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
