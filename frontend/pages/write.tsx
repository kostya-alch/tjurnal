import { TextField } from '@material-ui/core';
import { MainLayout } from '../layout/MainLayout';
import { WriteForm } from '../components/WriteForm';

export default function Write(): JSX.Element {
  return (
    <MainLayout hideMenu className="main-layout-white" hideComments>
      <WriteForm />
    </MainLayout>
  );
}
