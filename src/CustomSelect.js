import {Container } from 'react-bootstrap';
import React, { memo } from "react";
import Select, { components } from "react-select";
import SimpleBar from "simplebar-react";


const options = [
    { value: 'react', label: 'ReactJs' },
    { value: 'react-native', label: 'React Native' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'node', label: 'Node' },
    { value: 'c++', label: 'C++' },
    { value: 'react-vr', label: 'React VR' },
    { value: 'C', label: 'C' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'C#', label: 'C#' },
    { value: 'angular', label: 'Angular' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'vue', label: 'VueJs' },
    { value: 'express', label: 'Express' },
    { value: 'wordpress', label: 'Word Press' },
    { value: 'php', label: 'PHP' },
    { value: 'laravel', label: 'Laravel' },
  ]

  function onChangeInput(value){
    console.log(value);
  }

  const MenuList = memo(props => (
    <components.MenuList {...props}>
      <SimpleBar style={{ maxHeight: "200px" }}>{props.children}</SimpleBar>
    </components.MenuList>
  ));

const CustomSelect = ({style}) => {
    return (
        <Container>
          <div style={style}>
                
          <Select
           styles={{  dropdownIndicator: (base, state) => ({
            ...base,
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: '200ms',
          }),}}
                captureMenuScroll={false}
                onChange={onChangeInput}
                // isMulti={true}
                options={options}
                classNamePrefix="rs"
                placeholder="Select"
                // defaultValue={[options[2], options[1]]}
                components={{ MenuList }}
          />
          </div>
        </Container>
    );
};

export default CustomSelect;