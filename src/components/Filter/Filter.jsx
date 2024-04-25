import { Input } from "./Filter.styled";
import { useSelector, useDispatch } from "react-redux";

import { setFilter } from "../../redux/filters/slice";
import { getFilter } from "../../redux/filters/selectors";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="filter">
        Find contacts by name
        <Input
          name="filter"
          type="text"
          value={filter}
          onChange={(evt) => dispatch(setFilter(evt.target.value))}
          placeholder="Search contact"
        />
      </label>
    </div>
  );
};

export default Filter;
