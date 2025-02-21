import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import type { BreadcrumbProps } from '@yuntijs/ui';
import { Breadcrumb } from '@yuntijs/ui';

const items = [
  {
    path: '/apps',
    title: 'Application List',
  },
  {
    path: '/detail/app-1',
    title: 'Detail',
  },
  {
    path: '/versions',
    title: 'Version',
  },
];

export default () => {
  const store = useCreateStore();
  const control: BreadcrumbProps | any = useControls(
    {
      separator: '/',
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Breadcrumb {...control} items={items} />
    </StoryBook>
  );
};
