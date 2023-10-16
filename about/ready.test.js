import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

describe('ready', () => {
    it('means we can assert stuff', () => {
        assert.equal(21 * 2, 42);
    });
});
