const validations = {
    username: {
        required: 'Must be filled',
        minLength: {
            value: 3,
            message: 'Minimum 3 characters'
        },
        maxLength: {
            value: 12,
            message: 'Maximum 12 characters'
        },
    },
    email: {
        required: 'Must be filled',
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Does not match email format'
        }
    },
    password: {
        required: 'Must be filled',
        minLength: {
            value: 8,
            message: 'Minimum 8 characters'
        }
    }
}

export default validations
