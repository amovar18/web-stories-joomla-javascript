/*
 * Copyright 2021 Google LLC
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
import { useCallback } from '@web-stories-wp/react';
import { trackEvent } from '@web-stories-wp/tracking';
import { useSnackbar } from '@web-stories-wp/design-system';

/**
 * Internal dependencies
 */
import { SUCCESS } from '../constants';
import { useEditorSettings } from '../components/editorSettings';

export default function useMediaOptimization() {
  const { showSnackbar } = useSnackbar();

  const { currentUser, toggleWebStoriesMediaOptimization } = useEditorSettings(
    ({
      state: { currentUser },
      actions: {
        usersApi: { toggleWebStoriesMediaOptimization },
      },
    }) => ({
      currentUser,
      toggleWebStoriesMediaOptimization,
    })
  );

  const mediaOptimization = Boolean(
    currentUser.data.meta?.webStoriesMediaOptimization
  );

  const _toggleWebStoriesMediaOptimization = useCallback(() => {
    toggleWebStoriesMediaOptimization();
    trackEvent('video_optimization_optin', {
      status: mediaOptimization ? 'off' : 'on',
    });
    showSnackbar({ message: SUCCESS.SETTINGS.UPDATED, dismissable: true });
  }, [mediaOptimization, showSnackbar, toggleWebStoriesMediaOptimization]);

  return {
    mediaOptimization,
    disabled: currentUser.isUpdating,
    toggleWebStoriesMediaOptimization: _toggleWebStoriesMediaOptimization,
  };
}