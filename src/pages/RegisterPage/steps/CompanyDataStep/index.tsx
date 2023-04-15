import React from 'react';
import { observer } from 'mobx-react-lite';
import CompanyDataForm from '../../../../components/CompanyDataForm';
import { CompanyDataType } from '../../model';
import StepWrapper from '../StepWrapper';

export type CompanyDataStepProps = {
  setData: (data: CompanyDataType) => void;
  prevStep: () => void;
};

const CompanyDataStep: React.FC<CompanyDataStepProps> = (props) => {
  return (
    <StepWrapper prevStep={() => props.prevStep()}>
      <CompanyDataForm onSubmit={props.setData} prevStep={props.prevStep} />
    </StepWrapper>
  );
};

export default observer(CompanyDataStep);
