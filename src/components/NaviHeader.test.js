const NaviHeader = require("./NaviHeader")
// @ponicode
describe("navtoLast", () => {
    let inst

    beforeEach(() => {
        inst = new NaviHeader.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.navtoLast()
        }
    
        expect(callFunction).not.toThrow()
    })
})
