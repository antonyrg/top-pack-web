'use strict';

describe('TopPack.version module', function() {
  beforeEach(module('TopPack.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
