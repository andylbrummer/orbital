/**
 * Orbital (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Standard Beagle Studio, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from "chai";
import jsdom from "mocha-jsdom";
import Orbital from "../src/Orbital";

describe("Orbital", () => {
  jsdom();

  it("should verify input parameters.", () => {
    expect(() => Orbital()).to.throw(
      "Orbital's first parameter must be an element selector."
    );
  });

  it("should bind to the element selected.", () => {
    expect(() => Orbital()).to.throw(
      "Orbital's first parameter must be an element selector."
    );
  });
});
