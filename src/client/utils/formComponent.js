import React from 'react'
import classnames from "classnames";

//constant untuk membuat form atau field yang sudah di definisikan property 
//yang biasa dipakai oleh form input
export const TextField = ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled,
}) => {
    return (
        <div>
            <div className="form-group">
                <input type={type}
                    className={classnames('form-control form-control-lg', { 'is-invalid': error })}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                />
                {info && <small className="form-text text-muted">{info}</small>}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}
//constant untuk membuat form atau field yang sudah di definisikan property 
//yang biasa dipakai oleh form textarea
export const TextArea = ({
    name,
    placeholder,
    value,
    error,
    info,
    onChange

}) => {
    return (
        <div>
            <div className="form-group">
                <textarea
                    className={classnames('form-control form-control-lg', { 'is-invalid': error })}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                {info && <small className="form-text text-muted">{info}</small>}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}
//constant untuk membuat form atau field yang sudah di definisikan property 
//yang biasa dipakai oleh form selectoption
export const SelectList = ({
    name,
    value,
    error,
    info,
    onChange,
    options

}) => {
    //untuk menampilkan keseluruhan pembuatan form option
    const selectOptions = options.map(option => (
        <option key={option.label} value={option.value}>
            {option.label}
        </option>
    ));
    return (
        <div>
            <div className="form-group">
                <select
                    className={classnames('form-control form-control-lg', { 'is-invalid': error })}
                    name={name}
                    value={value}
                    onChange={onChange}>
                    {selectOptions}
                </select>
                {info && <small className="form-text text-muted">{info}</small>}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}

//constant untuk membuat form atau field yang sudah di definisikan property 
//yang biasa dipakai oleh form input group
export const InputGroup = ({
    name,
    value,
    placeholder,
    error,
    onChange,
    icon,
    type

}) => {
    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className={icon} />
                    </span>
                </div>
                <input type={type}
                    className={classnames('form-control form-control-lg', { 'is-invalid': error })}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}

//default props untuk property type
// TextFieldGroup.defaultProps = {
//     type : "text"
// }
//validasi property yang didefinisikan
// TextFieldGroup.propTypes = {
//     name:PropTypes.string.isRequired,
//     placeholder: PropTypes.string,
//     value: PropTypes.string.isRequired,
//     info: PropTypes.string,
//     error: PropTypes.string,
//     type: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     disabled: PropTypes.string,
//     label: PropTypes.string,
// }