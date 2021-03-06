// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Registry } from '../types';

import U32 from './U32';

/**
 * @name USize
 * @description
 * A System default unsigned number, typically used in RPC to report non-consensus
 * data. It is a wrapper for [[U32]] as a WASM default (as generated by Rust bindings).
 * It is not to be used, since it created consensus mismatches.
 */
export default class USize extends U32 {
  constructor (registry: Registry, value?: unknown) {
    super(registry, value);

    throw new Error('The `usize` type should not be used. Since it is platform-specific, it creates incompatibilities between native (generally u64) and WASM (always u32) code. Use one of the `u32` or `u64` types explicitly.');
  }
}
