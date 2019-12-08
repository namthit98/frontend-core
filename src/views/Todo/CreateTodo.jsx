import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { todoSchema } from '../../validations/todo.validation';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { createTodo } from '../../store/actions/todo.action';
import { useStyles } from './styles';

export const CreateTodo = ({ createTodo }) => {
  const classes = useStyles();

  const {
    handleSubmit,
    handleChange,
    resetForm,
    values: formikValues,
    errors: formikErrors,
    touched: formikTouched,
  } = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: todoSchema,
    onSubmit: values => {
      createTodo({
        text: values.text,
        completed: false,
      }),
        resetForm();
    },
  });

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          name="text"
          label="Title"
          onChange={handleChange}
          value={formikValues.text}
          type="text"
          placeholder="Input todo here !!"
          fullWidth
          error={formikErrors.text && formikTouched.text}
          helperText={formikErrors.text && formikTouched.text ? formikErrors.text : null}
        />
      </form>
      <br />
      <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
        ADDD
      </Button>
    </div>
  );
};

CreateTodo.propTypes = {
  createTodo: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, {
  createTodo,
})(CreateTodo);
