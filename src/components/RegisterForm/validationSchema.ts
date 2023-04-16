import * as yup from 'yup';

export const passwordValidation = yup
  .string()
  .required('is_required')
  .max(40, 'password_is_long')
  .min(8, 'password_is_short')
  .test('low complexity', 'password_low_complexity', (text) => {
    const numberCase: boolean = /^(?=.*[0-9]).+$/.test(text ?? '');
    const letterCase: boolean = /^(?=.*[a-z]).+$/.test(text ?? '') && /^(?=.*[A-Z]).+$/.test(text ?? '');
    const specialSymbolCase: boolean = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/.test(text ?? '');
    return (letterCase && specialSymbolCase) || (letterCase && numberCase) || (numberCase && specialSymbolCase);
  });

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: passwordValidation,
});
