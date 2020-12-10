import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleInputClear = ()=>{
        setInputValue('')
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if( inputValue.trim().length > 2){
            setCategories((catgs)=>[ inputValue, ...catgs])
            handleInputClear()
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value= { inputValue }
                onChange={handleInputChange}
                onClick={handleInputClear}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}