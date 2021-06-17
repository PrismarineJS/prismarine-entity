/* eslint-env mocha */

const prismarineEntity = require('../')
const versions = reqiure('../src/version')

for (const supportedVersion of versions.testedVersions) {
    describe(`prismarineEntity ${supportedVersion}`, function () {
      let entity = new prismarineEntity(0, '1.12.2')
    }
}
