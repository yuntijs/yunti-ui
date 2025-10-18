import { ActionIcon } from '@lobehub/ui';
import { InputNumber } from 'antd';
import { LexicalEditor } from 'lexical';
import { Minus, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  DEFAULT_FONT_SIZE,
  MAX_ALLOWED_FONT_SIZE,
  MIN_ALLOWED_FONT_SIZE,
} from '@/RichTextEditor/constants/toolbar';

import { UpdateFontSizeType, updateFontSize, updateFontSizeInSelection } from './utils';

interface PROPS {
  selectionFontSize: number;
  disabled: boolean;
  editor: LexicalEditor;
}

export const FontSizeInput: React.FC<PROPS> = ({ selectionFontSize, disabled, editor }: PROPS) => {
  const [inputValue, setInputValue] = useState<number>(selectionFontSize);
  const [inputChangeFlag, setInputChangeFlag] = useState<boolean>(false);

  const updateFontSizeByInputValue = (inputValueNumber: number) => {
    let updatedFontSize = inputValueNumber;
    if (inputValueNumber > MAX_ALLOWED_FONT_SIZE) {
      updatedFontSize = MAX_ALLOWED_FONT_SIZE;
    } else if (inputValueNumber < MIN_ALLOWED_FONT_SIZE) {
      updatedFontSize = MIN_ALLOWED_FONT_SIZE;
    }

    setInputValue(updatedFontSize);
    updateFontSizeInSelection(editor, String(updatedFontSize) + 'px', null);
    setInputChangeFlag(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValueNumber = Number(inputValue);

    if (e.key === 'Tab') {
      return;
    }
    if (['e', 'E', '+', '-'].includes(e.key) || Number.isNaN(inputValueNumber)) {
      e.preventDefault();
      return;
    }
    setInputChangeFlag(true);
    if (e.key === 'Enter' || e.key === 'Escape') {
      e.preventDefault();

      updateFontSizeByInputValue(inputValueNumber);
    }
  };

  const handleInputBlur = () => {
    if (inputValue && inputChangeFlag) {
      const inputValueNumber = Number(inputValue);
      updateFontSizeByInputValue(inputValueNumber);
    }
  };

  useEffect(() => {
    setInputValue(selectionFontSize);
  }, [selectionFontSize]);

  return (
    <>
      <ActionIcon
        disabled={disabled || (!!selectionFontSize && Number(inputValue) <= MIN_ALLOWED_FONT_SIZE)}
        icon={Minus}
        onClick={() => updateFontSize(editor, UpdateFontSizeType.decrement, inputValue)}
        size={{ size: 14, blockSize: 22 }}
      />

      <InputNumber
        controls={false}
        disabled={disabled}
        max={MAX_ALLOWED_FONT_SIZE}
        min={MIN_ALLOWED_FONT_SIZE}
        onBlur={handleInputBlur}
        onChange={v => setInputValue(v || DEFAULT_FONT_SIZE)}
        onKeyDown={handleKeyPress}
        size="small"
        style={{ width: 40, textAlign: 'center' }}
        value={inputValue}
      />

      <ActionIcon
        disabled={disabled || (!!selectionFontSize && Number(inputValue) >= MAX_ALLOWED_FONT_SIZE)}
        icon={Plus}
        onClick={() => updateFontSize(editor, UpdateFontSizeType.increment, inputValue)}
        size={{ size: 14, blockSize: 22 }}
      />
    </>
  );
};
