import { createContext } from 'react';

export const FormGroumContext = createContext({});

function FormGroupProvider({ children, ...props }) {
  return (
    <FormGroumContext.Provider value={props}>
      {children}
    </FormGroumContext.Provider>
  );
}

export default FormGroupProvider;
