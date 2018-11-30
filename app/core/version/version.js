'use strict';

angular.module('TopPack.version', [
  'TopPack.version.interpolate-filter',
  'TopPack.version.version-directive'
])

.value('version', '0.1');
