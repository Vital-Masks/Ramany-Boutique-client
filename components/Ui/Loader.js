import { BeatLoader } from 'react-spinners';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loader = ({load}) => {
  return (
      <BeatLoader color='#368ED7' loading={load} css={override} size={10} margin={2} />
  );
};

export default Loader;
