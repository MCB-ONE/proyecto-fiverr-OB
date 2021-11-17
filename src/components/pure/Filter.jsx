import React, { useEffect, useState } from 'react';
import Select from 'react-select';
// Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllcategories } from '../../store/slices/categories';

/* import { BsFilter } from 'react-icons/bs'; */
import '../../styles/css/filter.scss';
import { fetchServicesByCat } from '../../store/slices/services';

const Filter = () => {
  // TODO CHANGE THIS
  const [selectedOption, setSelectedOption] = useState(null);
  // We have to extract data from the Redux store state.
  const { categoriesList: categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    // Important: We have to dispatch the fetch api function
    dispatch(fetchAllcategories());
  }, [dispatch]);
  console.log(categories);

  const handleChange = (e) => {
    const optionValue = e.value;
    setSelectedOption(optionValue);
    console.log(selectedOption);
    dispatch(fetchServicesByCat(optionValue));
  };

  return (
    <Select
      defaultValue={selectedOption}
      onChange={handleChange}
      options={categories.map((categorie) => {
        return (
          { value: categorie.id, label: categorie.nombre }
        );
      })}
    />
  );
};

export default Filter;
