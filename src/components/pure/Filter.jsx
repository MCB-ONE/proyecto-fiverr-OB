import React, { useEffect, useState } from 'react';
import Select from 'react-select';
// Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllcategories } from '../../store/slices/categories';

/* import { BsFilter } from 'react-icons/bs'; */
import '../../styles/css/filter.scss';
import { fetchAllServices, fetchServicesByCat } from '../../store/slices/services';

/* const filterClass = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#19A463' : 'inherit',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
}; */

const Filter = () => {
  // TODO CHANGE THIS
  const [selectedOption, setSelectedOption] = useState('all');
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
    if (optionValue !== 'all') {
      dispatch(fetchServicesByCat(optionValue));
    } else {
      dispatch(fetchAllServices());
    }
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
      className="react-select-container"
      classNamePrefix="react-select"
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          text: 'inherit',
          primary25: 'white',
          primary: '#19A463',
          primary50: '#19a46399',
        },
      })}
    />
  );
};

export default Filter;
