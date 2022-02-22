import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const displayCurrentDate = (dateContainer) => {
  setInterval(() => {
    dateContainer.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }, 1000);
};

export default displayCurrentDate;