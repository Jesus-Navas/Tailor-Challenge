const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')
const SALT_WORK_FACTOR = 10;
const PASSWORD_PATTERN = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/


const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        match: [
            PASSWORD_PATTERN,
            'Passwords must contain at least eight characters, including uppercase, lowercase letters and numbers.',
        ],
    },
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
    }]

},
    {
        timestamps: true,
    });

userSchema.pre('save', async function (next) {

    const user = this
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
    const hash = await bcrypt.hash(user.password, salt)

    if (!user.isModified('password')) {
        next()
    }
    else {
        user.password = hash
            (next()).catch(next)
    }
})

userSchema.methods.isValidPassword = async function (password) {
    const user = this
    const compare = await bcrypt.compare(password, this.password)
    return compare
}

const User = mongoose.model("User", userSchema);
module.exports = User;