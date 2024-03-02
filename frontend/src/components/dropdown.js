// import * as React from "react"
// import Box from "@mui/material/Box"
// import InputLabel from "@mui/material/InputLabel"
// import MenuItem from "@mui/material/MenuItem"
// import FormControl from "@mui/material/FormControl"
// import Select from "@mui/material/Select"

// const Dropdown = () => {
//   const [dropdownvalue, setDropdownvalue] = React.useState("")

//   const handleChange = (event) => {
//     setDropdownvalue(event.target.value)
//   }

//   let menu_item = [
//     {name: " DropDown"},
//     { name: "Ten", value: 10 },
//     { name: "Twenty", value: 20 },
//     { name: "Thirty", value: 30 },
//     { name: "Fourty", value: 40 },
//     { name: "Fifty", value: 50 },
//     { name: "Ten", value: 10 },
//     { name: "Twenty", value: 20 },
//     { name: "Thirty", value: 30 },
//     { name: "Fourty", value: 40 },
//     { name: "Fifty", value: 50 },
//   ]

//   return (
//     <Box sx={{ minWidth: 600 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Dropdown</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={dropdownvalue}
//           label="Dropdown"
//           onChange={handleChange}
//         >
//           {menu_item.map((item) => {
//             return <MenuItem value={item.value}>{item.name}</MenuItem>
//           })}
//         </Select>
//       </FormControl>
//       <h1>{dropdownvalue}</h1>
//     </Box>
//   );
// };

// export default Dropdown;


import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown_01 = () => {
  const [dropdownvalue, setDropdownvalue] = React.useState("");

  const handleChange = (event) => {
    setDropdownvalue(event.target.value);
  };

  let menu_item = [
    { name: "Child_01", value: 10 },
    { name: "Child_02", value: 20 },
    { name: "Child_03", value: 30 },
    { name: "Child_04", value: 40 },
    { name: "Child_05", value: 50 },

  ];

  return (
    <Box sx={{ minWidth: 600 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Dropdown</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dropdownvalue}
          label="Dropdown"
          onChange={handleChange}
        >
          {menu_item.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.value ? item.name : ''}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* <h1>{dropdownvalue}</h1> */}
    </Box>
  );
};

export default Dropdown_01;
