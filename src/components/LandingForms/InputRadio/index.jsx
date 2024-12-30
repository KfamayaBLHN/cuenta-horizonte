import React, { useEffect, useState } from 'react';
import style from "./styles.module.scss";

const RadioButtonGroup = ({ config, onChange, name }) => {
    const { label, options, defaultValue, labelOption = '' } = config;
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const [orientation, setOrientation] = useState('horizontal');



    useEffect(() => {
        onChange({ selectedOption, name });
    }, [selectedOption]);

    useEffect(() => {
        if (typeof config.orientation !== 'undefined') {
            setOrientation(config.orientation);
        }
    }, []);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className={`${style.input_radio} pb-5`}>
            <span className='pb-1 d-block'>{label}</span>
            <div className={`${style[`orientation_${orientation}`]}`} data-name={orientation}>
                {options.map((option) => (
                    <React.Fragment key={option}>
                        <label className={style.radio}>
                            <input
                                name={name}
                                type="radio"
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => handleOptionChange(option)}
                            />
                            <span key={option}>
                                {option} {labelOption}
                            </span>
                        </label>
                    </React.Fragment>

                ))}
            </div>
        </div >
    );
};

export default RadioButtonGroup;