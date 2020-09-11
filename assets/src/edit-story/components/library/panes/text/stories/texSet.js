/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import TextSet from '../textSets/textSet';
import LibraryProvider from '../../../libraryProvider';
import { UnitsProvider } from '../../../../../units';
import { getBox } from '../../../../../units/dimensions';
import { TransformProvider } from '../../../../transform';
import { FontProvider } from '../../../../../app/font';
import { APIProvider } from '../../../../../app/api';
import { ConfigProvider } from '../../../../../app/config';
import { TEXT_SET_SIZE } from '../../../../../constants';

export default {
  title: 'Stories Editor/Components/Library/Panes/Text/TextSet',
  component: TextSet,
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};

export const _default = () => {
  const textSet1 = [
    {
      opacity: 100,
      flip: {
        vertical: false,
        horizontal: false,
      },
      rotationAngle: 0,
      lockAspectRatio: false,
      backgroundTextMode: 'HIGHLIGHT',
      font: {
        family: 'Princess Sofia',
        service: 'fonts.google.com',
        fallbacks: ['cursive'],
        weights: [400],
        styles: ['regular'],
        variants: [[0, 400]],
      },
      fontSize: 50,
      backgroundColor: {
        color: {
          r: 15,
          g: 15,
          b: 15,
        },
      },
      lineHeight: 3,
      textAlign: 'center',
      padding: {
        locked: true,
        horizontal: 0,
        vertical: 0,
      },
      type: 'text',
      content: '<span style="color: #ddd0d0">Subscribe now!</span>',
      fontWeight: 400,
      x: 0,
      y: 106,
      width: 248,
      height: 150,
      scale: 100,
      focalX: 50,
      focalY: 50,
      id: 'b027dcd3-f9da-44e9-9b44-bd2da3e51851',
      textSetWidth: 305,
      textSetHeight: 295,
    },
    {
      opacity: 90,
      flip: {
        vertical: false,
        horizontal: false,
      },
      rotationAngle: 0,
      lockAspectRatio: true,
      backgroundTextMode: 'FILL',
      font: {
        family: 'BioRhyme',
        service: 'fonts.google.com',
        fallbacks: ['serif'],
        weights: [200, 300, 400, 700, 800],
        styles: ['regular'],
        variants: [
          [0, 200],
          [0, 300],
          [0, 400],
          [0, 700],
          [0, 800],
        ],
      },
      fontSize: 26,
      backgroundColor: {
        color: {
          r: 50,
          g: 50,
          b: 50,
        },
      },
      lineHeight: 1.5,
      textAlign: 'center',
      padding: {
        locked: true,
        horizontal: 0,
        vertical: 0,
      },
      type: 'text',
      content:
        '<span style="font-weight: 700; color: #fffffe">Contact us!</span>',
      fontWeight: 400,
      x: 0,
      y: 280,
      width: 252,
      height: 39,
      scale: 100,
      focalX: 50,
      focalY: 50,
      id: '72d6429a-1e1a-4b42-9cb2-e8d2e1afc03e',
      textSetWidth: 305,
      textSetHeight: 295,
    },
  ];

  return (
    <LibraryProvider insertElements={() => {}}>
      <UnitsProvider
        getBox={getBox}
        pageSize={{
          width: TEXT_SET_SIZE,
          height: TEXT_SET_SIZE,
        }}
      >
        <TransformProvider registerTransformHandler={() => {}}>
          <ConfigProvider config={{ api: { stories: [] } }}>
            <APIProvider getAllFonts={() => {}}>
              <FontProvider maybeEnqueueFontStyle={() => {}}>
                <TextSet elements={textSet1} index={0} />
              </FontProvider>
            </APIProvider>
          </ConfigProvider>
        </TransformProvider>
      </UnitsProvider>
    </LibraryProvider>
  );
};
