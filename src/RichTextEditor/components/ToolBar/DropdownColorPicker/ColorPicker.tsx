import { calculateZoomLevel } from '@lexical/utils';
import { Button, Flex, Input } from 'antd';
import type { JSX } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as React from 'react';

import { useStyles } from './style';

let skipAddingToHistoryStack = false;

interface ColorPickerProps {
  color: string;
  onChange?: (value: string, skipHistoryStack: boolean) => void;
}

export function parseAllowedColor(input: string) {
  return /^rgb\(\d+, \d+, \d+\)$/.test(input) ? input : '';
}

const basicColors = [
  '#d0021b',
  '#f5a623',
  '#f8e71c',
  '#8b572a',
  '#7ed321',
  '#417505',
  '#bd10e0',
  '#9013fe',
  '#4a90e2',
  '#50e3c2',
  '#b8e986',
  '#000000',
  '#4a4a4a',
  '#9b9b9b',
  '#ffffff',
];

const WIDTH = 214;
const HEIGHT = 150;

export interface Position {
  x: number;
  y: number;
}

interface MoveWrapperProps {
  className?: string;
  style?: React.CSSProperties;
  onChange: (position: Position) => void;
  children: JSX.Element;
}

function MoveWrapper({ className, style, onChange, children }: MoveWrapperProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const draggedRef = useRef(false);

  const move = (e: React.MouseEvent | MouseEvent): void => {
    if (divRef.current) {
      const { current: div } = divRef;
      const { width, height, left, top } = div.getBoundingClientRect();
      const zoom = calculateZoomLevel(div);
      const x = clamp(e.clientX / zoom - left, width, 0);
      const y = clamp(e.clientY / zoom - top, height, 0);

      onChange({ x, y });
    }
  };

  const onMouseDown = (e: React.MouseEvent): void => {
    if (e.button !== 0) {
      return;
    }

    move(e);

    const onMouseMove = (_e: MouseEvent): void => {
      draggedRef.current = true;
      skipAddingToHistoryStack = true;
      move(_e);
    };

    const onMouseUp = (_e: MouseEvent): void => {
      if (draggedRef.current) {
        skipAddingToHistoryStack = false;
      }

      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);

      move(_e);
      draggedRef.current = false;
    };

    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('mouseup', onMouseUp, false);
  };

  return (
    <div className={className} onMouseDown={onMouseDown} ref={divRef} style={style}>
      {children}
    </div>
  );
}

function clamp(value: number, max: number, min: number) {
  if (value > max) {
    return max;
  }
  if (value < min) {
    return min;
  }
  return value;
}

interface RGB {
  b: number;
  g: number;
  r: number;
}
interface HSV {
  h: number;
  s: number;
  v: number;
}
interface Color {
  hex: string;
  hsv: HSV;
  rgb: RGB;
}

export function toHex(value: string): string {
  if (!value.startsWith('#')) {
    const ctx = document.createElement('canvas').getContext('2d');

    if (!ctx) {
      throw new Error('2d context not supported or canvas already initialized');
    }

    ctx.fillStyle = value;

    return ctx.fillStyle;
  } else if (value.length === 4 || value.length === 5) {
    value = value
      .split('')
      .map((v, i) => (i ? v + v : '#'))
      .join('');

    return value;
  } else if (value.length === 7 || value.length === 9) {
    return value;
  }

  return '#000000';
}

function hex2rgb(hex: string): RGB {
  const rbgArr = (
    hex
      .replace(/^#?([\da-f])([\da-f])([\da-f])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
      .slice(1)
      .match(/.{2}/g) || []
  ).map(x => Number.parseInt(x, 16));

  return {
    b: rbgArr[2],
    g: rbgArr[1],
    r: rbgArr[0],
  };
}

function rgb2hsv({ r, g, b }: RGB): HSV {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const d = max - Math.min(r, g, b);

  let h = 0;
  if (d) {
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0);
    } else {
      h = max === g ? 2 + (b - r) / d : 4 + (r - g) / d;
    }
    h = h * 60;
  }

  // const h = d
  //   ? (max === r
  //       ? (g - b) / d + (g < b ? 6 : 0)
  //       : max === g
  //       ? 2 + (b - r) / d
  //       : 4 + (r - g) / d) * 60
  //   : 0;
  const s = max ? (d / max) * 100 : 0;
  const v = max * 100;

  return { h, s, v };
}

function hsv2rgb({ h, s, v }: HSV): RGB {
  s /= 100;
  v /= 100;

  const i = Math.trunc(h / 60);
  const f = h / 60 - i;
  const p = v * (1 - s);
  const q = v * (1 - s * f);
  const t = v * (1 - s * (1 - f));
  const index = i % 6;

  const r = Math.round([v, q, p, p, t, v][index] * 255);
  const g = Math.round([t, v, v, q, p, p][index] * 255);
  const b = Math.round([p, p, t, v, v, q][index] * 255);

  return { b, g, r };
}

function rgb2hex({ b, g, r }: RGB): string {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

function transformColor<M extends keyof Color, C extends Color[M]>(format: M, color: C): Color {
  let hex: Color['hex'] = toHex('#121212');
  let rgb: Color['rgb'] = hex2rgb(hex);
  let hsv: Color['hsv'] = rgb2hsv(rgb);

  switch (format) {
    case 'hex': {
      const value = color as Color['hex'];

      hex = toHex(value);
      rgb = hex2rgb(hex);
      hsv = rgb2hsv(rgb);

      break;
    }
    case 'rgb': {
      const value = color as Color['rgb'];

      rgb = value;
      hex = rgb2hex(rgb);
      hsv = rgb2hsv(rgb);

      break;
    }
    case 'hsv': {
      const value = color as Color['hsv'];

      hsv = value;
      rgb = hsv2rgb(hsv);
      hex = rgb2hex(rgb);

      break;
    }
    // No default
  }

  return { hex, hsv, rgb };
}

export default function ColorPicker({ color, onChange }: Readonly<ColorPickerProps>): JSX.Element {
  const [selfColor, setSelfColor] = useState(transformColor('hex', color));
  const [inputColor, setInputColor] = useState(color);
  const innerDivRef = useRef(null);
  const { styles } = useStyles();

  const saturationPosition = useMemo(
    () => ({
      x: (selfColor.hsv.s / 100) * WIDTH,
      y: ((100 - selfColor.hsv.v) / 100) * HEIGHT,
    }),
    [selfColor.hsv.s, selfColor.hsv.v]
  );

  const huePosition = useMemo(
    () => ({
      x: (selfColor.hsv.h / 360) * WIDTH,
    }),
    [selfColor.hsv]
  );

  const onSetHex = (hex: string) => {
    setInputColor(hex);
    if (/^#[\da-f]{6}$/i.test(hex)) {
      const newColor = transformColor('hex', hex);
      setSelfColor(newColor);
    }
  };

  const onMoveSaturation = ({ x, y }: Position) => {
    const newHsv = {
      ...selfColor.hsv,
      s: (x / WIDTH) * 100,
      v: 100 - (y / HEIGHT) * 100,
    };
    const newColor = transformColor('hsv', newHsv);
    setSelfColor(newColor);
    setInputColor(newColor.hex);
  };

  const onMoveHue = ({ x }: Position) => {
    const newHsv = { ...selfColor.hsv, h: (x / WIDTH) * 360 };
    const newColor = transformColor('hsv', newHsv);

    setSelfColor(newColor);
    setInputColor(newColor.hex);
  };

  useEffect(() => {
    // Check if the dropdown is actually active
    if (innerDivRef.current !== null && onChange) {
      onChange(selfColor.hex, skipAddingToHistoryStack);
      setInputColor(selfColor.hex);
    }
  }, [selfColor, onChange]);

  useEffect(() => {
    if (color === undefined) {
      return;
    }
    const newColor = transformColor('hex', color);
    setSelfColor(newColor);
    setInputColor(newColor.hex);
  }, [color]);

  return (
    <div className={styles.colorPickerBox} ref={innerDivRef} style={{ width: WIDTH }}>
      <Flex align="center" gap={10}>
        <label>Hex</label>
        <Input onChange={e => onSetHex(e.target.value)} value={inputColor} />
      </Flex>
      <div className="color-picker-basic-color">
        {basicColors.map(basicColor => (
          <Button
            className={basicColor === selfColor.hex ? ' active' : ''}
            key={basicColor}
            onClick={() => {
              setInputColor(basicColor);
              setSelfColor(transformColor('hex', basicColor));
            }}
            style={{ backgroundColor: basicColor }}
          />
        ))}
      </div>
      <MoveWrapper
        className="color-picker-saturation"
        onChange={onMoveSaturation}
        style={{ backgroundColor: `hsl(${selfColor.hsv.h}, 100%, 50%)` }}
      >
        <div
          className="color-picker-saturation_cursor"
          style={{
            backgroundColor: selfColor.hex,
            left: saturationPosition.x,
            top: saturationPosition.y,
          }}
        />
      </MoveWrapper>
      <MoveWrapper className="color-picker-hue" onChange={onMoveHue}>
        <div
          className="color-picker-hue_cursor"
          style={{
            backgroundColor: `hsl(${selfColor.hsv.h}, 100%, 50%)`,
            left: huePosition.x,
          }}
        />
      </MoveWrapper>
      <div className="color-picker-color" style={{ backgroundColor: selfColor.hex }} />
    </div>
  );
}
