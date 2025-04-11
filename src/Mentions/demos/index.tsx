/* eslint-disable no-console */
import { Icon } from '@lobehub/ui';
import { Mentions, Typography } from '@yuntijs/ui';
import { Braces, Carrot, Cloud, Smile } from 'lucide-react';

export default () => {
  return (
    <Mentions
      autoSize={{
        minRows: 3,
        maxRows: 5,
      }}
      defaultValue="👋，I'm {{1.zhang}}"
      onTrigger={trigger => console.log('trigger =>', trigger)}
      options={[
        {
          label: 'zhang',
          value: '1.zhang',
          icon: <Icon icon={Smile} />,
        },
        {
          label: 'luobo',
          value: '2.luobo',
          icon: <Icon icon={Carrot} />,
          error: '选我触发错误样式',
        },
        {
          label: 'yunti',
          value: '3.yunti',
          icon: <Icon icon={Cloud} />,
        },
        {
          label: 'json',
          value: 'json',
          icon: <Icon icon={Braces} />,
          children: [
            {
              label: 'id',
              selectedLabel: 'json.id',
              value: 'json.id',
              title: 'json.id (json 的 id 属性)',
            },
            {
              label: 'name',
              selectedLabel: 'json.name',
              value: 'json.name',
            },
            {
              label: 'category',
              value: 'json.category',
              children: [
                {
                  label: 'id',
                  selectedLabel: 'json.category.id',
                  value: 'json.category.id',
                  extraElement: <Typography.Text code>string</Typography.Text>,
                },
                {
                  label: 'name',
                  selectedLabel: 'json.category.name',
                  value: 'json.category.name',
                },
              ],
            },
            {
              label: 'photoUrls',
              value: 'json.photoUrls',
              children: [
                {
                  label: '[Array Item]',
                  value: 'json.photoUrls.root',
                },
              ],
            },
            {
              label: 'tags',
              value: 'json.tags',
              children: [
                {
                  label: '[Array Item]',
                  value: 'json.tags.root',
                  disabled: true,
                },
                {
                  label: 'id',
                  value: 'json.tags.id',
                },
                {
                  label: 'name',
                  value: 'json.tags.name',
                },
              ],
            },
            {
              label: 'status',
              value: 'json.status',
            },
          ],
        },
      ]}
      preTriggerChars=".*"
      triggers={['@', '#']}
    />
  );
};
