import React, { useState } from 'react';

const LoginForm = ( { onSubmit } ) => {
  const [ formData, setFormData ] = useState( {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favoriteSeason: 'Spring',
  } );
  const [ errors, setErrors ] = useState( {} );

  const handleInputChange = ( e ) => {
    const { name, value } = e.target;
    setFormData( { ...formData, [ name ]: value } );
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // Validating each field
    if ( !nameRegex.test( formData.firstName ) ) {
      newErrors.firstName = 'First Name must contain only alphabets';
      valid = false;
    }

    if ( !nameRegex.test( formData.lastName ) ) {
      newErrors.lastName = 'Last Name must contain only alphabets';
      valid = false;
    }

    if ( !emailRegex.test( formData.email ) ) {
      newErrors.email = 'email must have a valid format';
      valid = false;
    }

    if ( !passwordRegex.test( formData.password ) ) {
      newErrors.password = 'Must contain at least 1 Alphabet, 1 Number, 1 Special Character and 1 Upper case letter';
      valid = false;
    }

    if ( !valid ) {
      setErrors( newErrors );
    } else {
      setErrors( {} );
    }

    return valid;
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();

    if ( validateForm() ) {
      onSubmit( formData );
    }
  };

  return (
    <form className="container mt-4" onSubmit={ handleSubmit }>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label style={ { fontWeight: 'bold' } }>First Name</label>
            <input type="text" className="form-control" name="firstName" value={ formData.firstName } onChange={ handleInputChange } required />
            { errors.firstName && <div className="text-danger">{ errors.firstName }</div> }
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label style={ { fontWeight: 'bold' } }>Last Name</label>
            <input type="text" className="form-control" name="lastName" value={ formData.lastName } onChange={ handleInputChange } required />
            { errors.lastName && <div className="text-danger">{ errors.lastName }</div> }
          </div>
        </div>
      </div>
      <div className="form-group">
        <label style={ { fontWeight: 'bold' } }>Email</label>
        <input type="text" className="form-control" name="email" value={ formData.email } onChange={ handleInputChange } style={ { width: '100%' } } required />
        { errors.email && <div className="text-danger">{ errors.email }</div> }
      </div>
      <div className="form-group">
        <label style={ { fontWeight: 'bold' } }>Password</label>
        <input type="password" className="form-control" name="password" value={ formData.password } onChange={ handleInputChange } style={ { width: '100%' } } required />
        { errors.password && <div className="text-danger">{ errors.password }</div> }
      </div>
      <div className="form-group">
        <label style={ { fontWeight: 'bold' } }>Favorite Season</label>
        <select className="form-control" name="favoriteSeason" value={ formData.favoriteSeason } onChange={ handleInputChange }>
          <option value="Spring">Spring</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>
  );
};

export default LoginForm;