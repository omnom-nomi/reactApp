/*
propTypes = a mechanism that ensures that the passed value 
is of the correct datatype

age: PropTypes.number

*/

import PropTypes from 'prop-types';

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
            <p>Student? : {props.isStudent ? "Yes" : "No"}</p>

        </div>
    )

}

Student.propTypes = {
    name: PropTypes.string, //name should be a string
    age: PropTypes.number, //age should be a number
    isStudent: PropTypes.bool //isStudent should be a boolean
}


export default Student;