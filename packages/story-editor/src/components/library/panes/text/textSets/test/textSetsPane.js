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
import { useRef } from '@web-stories-wp/react';
import { screen } from '@testing-library/react';

/**
 * Internal dependencies
 */
import LibraryContext from '../../../../context';
import TransformContext from '../../../../../transform/context';
import FontContext from '../../../../../../app/font/context';
import APIContext from '../../../../../../app/api/context';
import ConfigContext from '../../../../../../app/config/context';
import { renderWithTheme } from '../../../../../../testUtils';
import StoryContext from '../../../../../../app/story/context';
import TextSetsPane from '../textSetsPane';

function setup() {
  const libraryValue = {
    state: {
      textSets: [],
    },
    actions: {
      insertElement: jest.fn(),
    },
  };
  const transformValue = {
    actions: {
      registerTransformHandler: jest.fn(),
    },
  };
  const configValue = { api: { stories: [] } };
  const fontsValue = {
    actions: {
      maybeEnqueueFontStyle: jest.fn(),
    },
  };
  const apiValue = {
    actions: {
      getAllFonts: jest.fn(),
    },
  };

  const storyValue = {
    state: {
      pages: [],
    },
    actions: {
      setSelectedElementsById: jest.fn(),
    },
  };

  return renderWithTheme(
    <TransformContext.Provider value={transformValue}>
      <ConfigContext.Provider value={configValue}>
        <APIContext.Provider value={apiValue}>
          <StoryContext.Provider value={storyValue}>
            <FontContext.Provider value={fontsValue}>
              <LibraryContext.Provider value={libraryValue}>
                <MockPane>
                  {(paneRef) => <TextSetsPane paneRef={paneRef} />}
                </MockPane>
              </LibraryContext.Provider>
            </FontContext.Provider>
          </StoryContext.Provider>
        </APIContext.Provider>
      </ConfigContext.Provider>
    </TransformContext.Provider>
  );
}

// eslint-disable-next-line react/prop-types
function MockPane({ children }) {
  const ref = useRef();
  return <div ref={ref}>{children(ref)}</div>;
}

describe('TextSets Panel', () => {
  it('should render the Panel', () => {
    setup();
    const h1 = screen.getByText('Text Sets');
    expect(h1).toBeInTheDocument();
  });
});
