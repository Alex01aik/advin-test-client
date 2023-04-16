import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required(),
  file: yup
    .mixed()
    .required()
    .test('fileRequired', 'File is required', (value: any) => {
      return value && value.length > 0;
    })
    .test(
      'allowedType',
      'invalid type',
      (value: any) => value[0].type === 'application/pdf' || value[0].type === 'application/msword'
    ),
});
