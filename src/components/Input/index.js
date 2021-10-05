import React from 'react'

function Input({ label, handleChange, value }) {
    return (
        <div className="grid margin-right-md">
            <label className="padding-bottom-sm ">
                {label}
            </label>
            <input name="" value={value} onChange={(e) => handleChange(e)} type="text" placeholder="" />
        </div>
    )
}

Input.propTypes = {

}

export default Input
