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
 * Update story properties.
 *
 * No validation is performed and existing values are overwritten.
 *
 * @param {Object} state Current state
 * @param {Object} payload Action payload
 * @param {Object | Function} payload.properties Object with story properties to set.
 * @return {Object} New state
 */
function updateStory(state, { properties }) {
  return {
    ...state,
    story:
      typeof properties === 'function'
        ? properties(state.story)
        : {
            ...state.story,
            ...properties,
          },
  };
}

export default updateStory;
