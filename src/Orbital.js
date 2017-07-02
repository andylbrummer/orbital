/**
 * Orbital (https://www.standardbeagle.com/orbital)
 *
 * Copyright © 2015-2016 Standard Beagle Studio, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

export default (selector) => {
  if (!selector) {
    throw new Error("Orbital's first parameter must be an element selector.");
  }
  return 'orbital';
};
