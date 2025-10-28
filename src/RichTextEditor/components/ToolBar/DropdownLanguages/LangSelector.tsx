import { CheckOutlined } from '@ant-design/icons';
import { getCodeLanguageOptions } from '@lexical/code';
import { Button, Flex } from 'antd';
import React from 'react';

import { useStyles } from './style';

interface PROPS {
  value: string;
  onChange: (v: string) => void;
}

const LangSelector: React.FC<PROPS> = ({ value, onChange }) => {
  const { cx, styles } = useStyles();

  return (
    <div className={styles.dropdownLang}>
      <Flex gap={2} justify="center" vertical>
        {getCodeLanguageOptions()?.map(([k, v]) => (
          <Button
            className={cx(styles.btn, value === k ? styles.activeBtn : '')}
            color="default"
            icon={value === k ? <CheckOutlined /> : null}
            iconPosition="end"
            key={k}
            onClick={() => onChange(k)}
            size="small"
            variant="text"
          >
            {v}
          </Button>
        ))}
      </Flex>
    </div>
  );
};

export default LangSelector;
