import React, { useEffect, useState } from 'react';
import Select from 'react-select';
// Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllcategories } from '../../store/slices/categories';
import { addFilter } from '../../store/slices/filters';

/* import { BsFilter } from 'react-icons/bs'; */
import '../../styles/css/filter.scss';

const Filter = () => {
  // TODO CHANGE THIS
  // State for filter option
  const [selectedOption, setSelectedOption] = useState(null);
  // Extract data from the Redux store at categories state to show in the filters options.
  const { categoriesList: categories } = useSelector((state) => state.categories);
  // Extract data from the Redux store at filters state to update it.
  const filtersList = useSelector((state) => state.filters);

  const dispatch = useDispatch();
  useEffect(() => {
    // Important: We have to dispatch the fetch api function
    dispatch(fetchAllcategories());
  }, [dispatch]);
  console.log(categories);

  // Change input handler to dispatch add new filter
  const handleChange = (e) => {
    const optionValue = e.value;
    // Check if category exist
    setSelectedOption(optionValue);
    if (!filtersList.includes(optionValue)) {
      // If not exist add new filter in store state
      dispatch(addFilter(optionValue));
    }
  };

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={handleChange}
        options={categories.map((categorie) => {
        return (
          { value: categorie.id, label: categorie.nombre }
        );
      })}
      />
    </>
  );
};

export default Filter;
