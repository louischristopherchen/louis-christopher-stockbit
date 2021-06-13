import { forwardRef } from 'react';
import styles from './index.module.scss';

const AutocompleteInput = ({
  search,
  setSearch,
  setAutoCompleteToggle,
  handleSubmitTitle,
  autoCompleteList,
  toggleAutoComplete,
}, ref) => {

  const {
    main,
    input_container,
    button_container,
    autocomplete_container,
    autocomplete_items,
  } = styles;

  return (<div className={main}>
    <input
      className={input_container}
      type='text'
      value={search}
      onChange={(e) => { setSearch(e.target.value); setAutoCompleteToggle(true); }}
      onKeyUp={(e) => { if (e.keyCode === 13) { handleSubmitTitle(); } }}
    />
    <button
      ref={ref}
      onClick={handleSubmitTitle}
      className={button_container}
    >
      Search
    </button>
    {autoCompleteList?.length && toggleAutoComplete ?
      <div className={autocomplete_container}>
        {autoCompleteList.map((item, index) => {
          return (
            <div
              className={autocomplete_items}
              key={index}
              onClick={() => { setSearch(item?.Title); setAutoCompleteToggle(false); }}
            >
              {item.Title}
            </div>)
        })}
      </div> : null}
  </div>)
}

export default forwardRef(AutocompleteInput);