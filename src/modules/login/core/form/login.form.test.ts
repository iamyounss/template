import { UserFactory } from "@/modules/login/core/model/user.factory"

const johndoe = UserFactory.create({
    userId: Math.random(),
    email: 'johndoe@gmail.com',
    password: 'johndoe94'
})

describe('login with email and password', () => {
    it('email should be a string inside email format', () => {
        
    })
})