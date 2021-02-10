const Vec3 = require('vec3').Vec3
const util = require('util')
const EventEmitter = require('events').EventEmitter

module.exports = loader

let mcData

function loader (mcVersion) {
  mcData = require('minecraft-data')(mcVersion)
  return Entity
}

function Entity (id) {
  EventEmitter.call(this)
  this.id = id
  this.type = null
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
  // all mc versions supported by mineflayer have:
  this.isOnFire = () => Boolean(this.metadata[0] & 0x01)
  this.isCrouched = () => Boolean(this.metadata[0] & 0x02)
  this.isSprinting = () => Boolean(this.metadata[0] & 0x08)
  this.isInvisible = () => Boolean(this.metadata[0] & 0x20)

  if (mcData.isOlderThan('1.9')) {
    this.isMovingSlowly = () => Boolean(this.metadata[0] & 0x10) // moving slowly, ie: Eating/Drinking/Blocking
  } else if (mcData.isNewerOrEqualTo('1.9')) {
    this.isSwimming = () => Boolean(this.metadata[0] & 0x10)
    this.isGlowing = () => Boolean(this.metadata[0] & 0x40) // has glowing effect
    this.isFlyingElytra = () => Boolean(this.metadata[0] & 0x80)
  }
}
util.inherits(Entity, EventEmitter)

Entity.prototype.setEquipment = function (index, item) {
  this.equipment[index] = item
  this.heldItem = this.equipment[0]
}
