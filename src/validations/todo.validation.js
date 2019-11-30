import * as Yup from 'yup'

export const todoSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
})
