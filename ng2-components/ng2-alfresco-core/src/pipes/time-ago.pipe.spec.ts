/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TimeAgoPipe } from './time-ago.pipe';

describe('TimeAgoPipe', () => {

    let pipe: TimeAgoPipe;

    beforeEach(() => {
        pipe = new TimeAgoPipe();
    });

    it('should return time difference for a given date', () => {
        let date = new Date();
        expect(pipe.transform(date)).toBe('a few seconds ago');
    });

    it('should return exact date if given date is more than seven days ', () => {
        let date = new Date('1990-11-03T15:25:42.749');
        expect(pipe.transform(date)).toBe('03/11/1990 15:25');
    });

    it('should return empty string if given date is empty', () => {
        expect(pipe.transform(null)).toBe('');
        expect(pipe.transform(undefined)).toBe('');
    });
});
