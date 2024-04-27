import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { getFilter } from "../../redux/filters/selectors";

import css from "./Filter.module.css";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleImputFilterValue = (ev) => {
    dispatch(setFilter(ev.target.value));
  };

  return (
    <div>
      <label htmlFor="filter">
        Find contacts by name
        <input
          className={css.filterInput}
          name="filter"
          type="text"
          value={filter}
          onChange={handleImputFilterValue}
          placeholder="Search contact"
        />
      </label>
    </div>
  );
};

export default Filter;
