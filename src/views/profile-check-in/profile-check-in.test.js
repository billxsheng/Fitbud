const rewire = require("rewire")
const profile_check_in = rewire("./profile-check-in")
const ProfileCheckIn = profile_check_in.__get__("ProfileCheckIn")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Jean-Philippe", "Edmond"], ["Michael", "Edmond", "Edmond"], ["Edmond", "Michael", "Jean-Philippe"]]
        inst = new ProfileCheckIn(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getGymLocation", () => {
    let inst

    beforeEach(() => {
        inst = new ProfileCheckIn("Edmond")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getGymLocation()
        }
    
        expect(callFunction).not.toThrow()
    })
})
