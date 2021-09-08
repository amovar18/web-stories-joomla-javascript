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
 * Internal dependencies
 */
import Inspector from '../inspector';
import Canvas from '../canvas';
import { RichTextProvider } from '../richText';
import { VideoTrimProvider } from '../videoTrim';
import ErrorBoundary from '../errorBoundary';
import { CanvasArea, InspectorArea } from './layout';

function Workspace() {
  return (
    <VideoTrimProvider>
      <RichTextProvider>
        <CanvasArea>
          <ErrorBoundary>
            <Canvas />
          </ErrorBoundary>
        </CanvasArea>
        <InspectorArea>
          <ErrorBoundary>
            <Inspector />
          </ErrorBoundary>
        </InspectorArea>
      </RichTextProvider>
    </VideoTrimProvider>
  );
}

export default Workspace;
