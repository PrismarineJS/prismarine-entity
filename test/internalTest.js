/* eslint-env mocha */

const versions = require('../src/version')

for (const supportedVersion of versions.testedVersions) {
  describe(`prismarineEntity ${supportedVersion}`, function () {
    const PrismarineEntity = require('../')(supportedVersion)

    it('creates an valid entity', (done) => {
      let Entity = new PrismarineEntity(0, false)
      if (Entity.isValid === true) {
        done()
      } else {
        throw new Error('Entity is not valid!?')
      }
    })
    it('reads metadata', (done) => {
      let Entity = new PrismarineEntity(0, true)
      if (Entity.isValid === true) {
        if (Entity.isOnFire() === false) {
          done()
        } else {
          throw new Error('Entity defaultly doesnt on fire!?')
        }
      } else {
        throw new Error('Entity is not valid!?')
      }
    })
    it('sets equipment', (done) => {
      let Entity = new PrismarineEntity(0, false)
      if (Entity.isValid === true) {
        Entity.setEquipment(0, 'fakeItem')
        if (Entity.heldItem == 'fakeItem') {
          done()
        } else {
          throw new Error('Cannot set equipment!?')
        }
      } else {
        throw new Error('Entity is not valid!?')
      }
    })
  })
}
