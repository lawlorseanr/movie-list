import React from 'react';

var submitForm = (props) => {
  return (
    <form>
      <input type="text" id="submitText"></input>
      <button type="submit"
        onClick={(e) => {
          e.preventDefault();
          var text = document.getElementById('submitText');
          if (text.value.length > 0) {
            props.onClick(e, text.value);
            text.value = '';
          }
      }}>Add</button>
  </form>
  );
}

export default submitForm;