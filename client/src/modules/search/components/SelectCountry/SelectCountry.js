import React from "react";
import Select from "react-select";

const SelectCountry = props => {

    const formatOptionLabel = ({value, label}) => (
        <div className="d-flex f32 align-items-center">
            <div className={`mr-3 flag ${value.toLowerCase()}`}/>
            <div>{label}</div>
        </div>
    );

    return (
        <div>
            <Select isSearchable={true}
                    isLoading={props.isLoading}
                    isClearable={true}
                    options={props.options}
                    value={props.value}
                    onChange={props.onChange}
                    formatOptionLabel={formatOptionLabel}/>
        </div>
    );
}

export default SelectCountry;
