














// import DatePicker from 'react-datepicker';
// import React, { useState } from 'react';
// import 'react-datepicker/dist/react-datepicker.css';

// const DesktopDatePicker = () => {
//     const [dateStart, setDateStart] = useState();

//     function onChangeHandler(value) {
//         setDateStart(value);
//     }

//     return (
//         <DatePicker
//             id="dateStartEnd"
//             selected={dateStart}
//             onChange={onChangeHandler}
//             dateFormat="dd MMM yyyy"
//             className={'form-control form-control-sm'}
//             showDisabledMonthNavigation
//             open 
//         />
//     );
// };

// export default DesktopDatePicker;







import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DesktopDatePicker = () => {
    const [dateStart, setDateStart] = useState();

    function onChangeHandler(value) {
        setDateStart(value);
    }

    return (
        <DatePicker
            selected={dateStart}
            onChange={onChangeHandler}
            dateFormat="dd MMM yyyy"
            className={'form-control form-control-sm'}
            showDisabledMonthNavigation
            open
            customInput={<></>} 
        />
    );
};

export default DesktopDatePicker;





