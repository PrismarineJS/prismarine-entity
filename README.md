# prismarine-entity
[![NPM version](https://img.shields.io/npm/v/prismarine-entity.svg)](http://npmjs.com/package/prismarine-entity)
[![Build Status](https://github.com/PrismarineJS/prismarine-entity/workflows/CI/badge.svg)](https://github.com/PrismarineJS/prismarine-entity/actions?query=workflow%3A%22CI%22)

Represent a minecraft entity with an api.

## Usage

```js
let prismarineEntity = require("prismarine-entity")

let Entity = new prismarineEntity(0)

console.log(Entity)
```

## API

### Entity(entityId, readMetadata = defaults false)

Entities represent players, mobs, and objects.

#### entity.id

Unique entity id.

#### entity.type

Choices:

 * `player`
 * `mob`
 * `object`
 * `global` - lightning
 * `orb` - experience orb.
 * `other` - introduced with a recent Minecraft update and not yet recognized or used by a third-party mod

#### entity.username

If the entity type is `player`, this field will be set.

#### entity.mobType

If the entity type is `mob`, this field will be set.

#### entity.displayName

Field set for mob and object. A long name in multiple words.

#### entity.entityType

Field set for mob and object. The numerical type of the entity (1,2,...)

#### entity.kind

Field set for mob and object. The kind of entity (for example Hostile mobs, Passive mobs, NPCs).

#### entity.name

Field set for mob and object. A short name for the entity.

#### entity.objectType

If the entity type is `object`, this field will be set.

#### entity.count

If the entity type is `orb`, this field will be how much experience you
get from collecting the orb.

#### entity.position

Vec3 presentation of entity's location.

#### entity.velocity

Vec3 presentation of entity's velocity.

#### entity.yaw

Entity's yaw.

#### entity.pitch

Entity's pitch.

#### entity.height

#### entity.width

#### entity.onGround

True when entity is on ground.

#### entity.equipment[5]

 * `0` - held item
 * `1` - shoes
 * `2` - legging
 * `3` - torso
 * `4` - head
 
#### entity.heldItem

Equivalent to `entity.equipment[0]`.

#### entity.metadata

See http://wiki.vg/Entities#Entity_Metadata_Format for more details.

#### entity.health

The health of the player, default: 20.

#### entity.food

The food of the player, default: 20.

#### entity.player

If entity is not player, here will undefined.

### Below this events, needs to metadata reading enabled.

#### entity.isOnFire => Defaults false, when entity is on fire it will true.
#### entity.isCrouched => Defaults false, when entity is crouched it will true.
#### entity.isSprinting => Defaults false, when entity is sprinted it will true.
#### entity.isInvisible => Defaults false, when entity is invisible it will true.
#### entity.isMovingSlowly => Defaults false, when entity is Eating/Drinking/Blocking it will true.
#### entity.isSwimming => Only for 1.9+, Defaults false, when entity is swimming it will true.
#### entity.isGlowing => Only for 1.9+, Defaults false, when entity is glowing it will true.
#### entity.isFlyingElytra => Only for 1.9+, Defaults false, when entity is flying it will true.
