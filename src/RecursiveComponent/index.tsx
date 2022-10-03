import { nestedObject } from '../RecursiveComponent/nestedObject';
import RecursiveComponent from '../RecursiveComponent/RecursiveComponent';

export default function Recursive() {
  return <RecursiveComponent data={nestedObject} />;
}
