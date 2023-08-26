const Vec3 = require('vec3').Vec3
const EventEmitter = require('events').EventEmitter

module.exports = (registryOrVersion) => {
  const registry = typeof registryOrVersion === 'string' ? require('prismarine-registry')(registryOrVersion) : registryOrVersion
  const ChatMessage = require('prismarine-chat')(registry)
  const Item = require('prismarine-item')(registry)
  class Entity extends EventEmitter {
    constructor (id) {
      super()
      this.id = id
      this.position = new Vec3(0, 0, 0)
      this.velocity = new Vec3(0, 0, 0)
      this.yaw = 0
      this.pitch = 0
      this.onGround = true
      this.height = 0
      this.width = 0
      this.effects = {}
      // 0 = held item, 1-4 = armor slot
      this.equipment = new Array(5)
      this.heldItem = this.equipment[0] // shortcut to equipment[0]
      this.isValid = true
      this.metadata = []
    }

    get mobType () {
      printMobTypeWarning()
      return this.displayName
    }

    set mobType (name) {
      printMobTypeWarning()
      this.displayName = name
    }

    get objectType () {
      printObjectTypeWarning()
      return this.displayName
    }

    set objectType (name) {
      printObjectTypeWarning()
      this.displayName = name
    }

    setEquipment (index, item) {
      this.equipment[index] = item
      this.heldItem = this.equipment[0]
    }

    getCustomName () {
      const name = this.metadata[2]
      if (name === undefined) {
        return null
      }
      return ChatMessage.fromNotch(name)
    }

    getDroppedItem () {
      if (this.name !== 'item' && this.name !== 'Item' && this.name !== 'item_stack') {
        return null // not a dropped item
      }
      return Item.fromNotch(this.metadata[registry.supportFeature('metadataIxOfItem')])
    }
  }

  return Entity
}
function printMobTypeWarning () {
  console.trace('Warning: entity.mobType is deprecated. Use entity.displayName instead')
}
function printObjectTypeWarning () {
  console.trace('Warning: entity.objectType is deprecated. Use entity.displayName instead')
}
