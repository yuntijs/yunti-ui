import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import type { TreeDataNode, TreeProps } from '@yuntijs/ui';
import { Tree } from '@yuntijs/ui';

const treeData: TreeDataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1677ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

export default () => {
  const store = useCreateStore();
  const control: TreeProps | any = useControls(
    {
      showLine: false,
      multiple: false,
      checkable: false,
      disabled: false,
      selectable: true,
      blockNode: false,
      draggable: false,
      checkStrictly: false,
      autoExpandParent: false,
      defaultExpandAll: true,
      defaultExpandParent: true,
      showIcon: false,
      icon: 'icon ',
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Tree {...control} treeData={treeData}></Tree>
    </StoryBook>
  );
};
