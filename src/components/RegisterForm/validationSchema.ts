import * as yup from 'yup';

export const passwordValidation = yup
  .string()
  .required()
  .max(40, 'password is too long')
  .min(8, 'password is too short')
  .test(
    'low complexity',
    'the password must meet at least two conditions: with one number, with upper and lower registy symbol, with special symbol',
    (text) => {
      const numberCase: boolean = /^(?=.*[0-9]).+$/.test(text ?? '');
      const letterCase: boolean = /^(?=.*[a-z]).+$/.test(text ?? '') && /^(?=.*[A-Z]).+$/.test(text ?? '');
      // eslint-disable-next-line no-useless-escape
      const specialSymbolCase: boolean = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/.test(text ?? '');
      return (letterCase && specialSymbolCase) || (letterCase && numberCase) || (numberCase && specialSymbolCase);
    }
  );

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: passwordValidation,
});
