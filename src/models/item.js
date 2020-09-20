const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// name: name,
// type: type,
// desc: desc,
// price: price,
// rarity: rarity,
// ac: ac,
// weight: weight,
// modifier: modifier,
// damage_dice: damage_dice,
// damage_type: damage_type,
// properties: properties,
// requires_attunement: requires_attunement,
// speed: speed,
// carrying_capacity: carrying_capacity

const itemSchema = new Schema({
  'type':'object',
  'properties': {
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['weapon', 'armor', 'magic item', 'tool', 'mount/vehicle', 'gear', 'food and drink', 'trade good', 'other']
    },
    desc: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    rarity: {
      type: String,
      enum: ['common', 'uncommon', 'rare', 'very rare', 'legendary', 'artifact', 'unknown'],
      required: ['magic item']
    }
  },
  'definitions': {
    'rarity-requires-magic-item'
  }
})
module.exports = mongoose.model("User", userSchema, "users")