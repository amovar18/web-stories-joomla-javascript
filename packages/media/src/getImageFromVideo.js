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
 * Returns a still image from a given video element.
 *
 * @param {HTMLVideoElement} video Video element.
 * @return {Promise<Blob>} JPEG image blob.
 */
function getImageFromVideo(video) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    try {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    } catch (err) {
      // Browser probably doesn't support the video codec.
      reject(err);
    }

    canvas.toBlob(resolve, 'image/jpeg');
  });
}

export default getImageFromVideo;
