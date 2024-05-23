import cs from './Spinner.module.css';

type sizeType = 'small' | 'medium' | 'large';
const Spinner = ({ size = 'small' }: { size: sizeType }) => (
  <div className={`${cs[size]}`}></div>
);

export default Spinner;
