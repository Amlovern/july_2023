const bcrypt = require('bcryptjs');

const hashPass = async (password) => {
    const hash = await bcrypt.hash(password, 13)
    console.log(hash)
}

// hashPass('password')

const hash = '$2b$12$7jNJGhKOQjZOW.sWY4JFEub/qhdo0ZUYhqLlvUT0FyWDobvZfVdWC'

const testPass = async (password, hash) => {
    const isPass = await bcrypt.compare(password, hash)
    console.log(isPass)
}

testPass('password123', hash)