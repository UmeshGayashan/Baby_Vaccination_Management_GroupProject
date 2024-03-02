import DatePicker from 'react-datepicker';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';


const DatePicker2 = () => {
  
    const [dateStart, setDateStart] = useState();

    function onChangeHandler(value) {
        setDateStart(value);
    }
    return( 
        <DatePicker
            id="dateStartEnd"
            selected={dateStart}
            onChange={onChangeHandler}
            dateFormat="dd MMM yyyy"
            className={'form-control form-control-sm'}
            showDisabledMonthNavigation
            open
            
        />
   );
};

export default DatePicker2;
