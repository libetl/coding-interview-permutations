import permutationFunction from '../src/index'
import chai from 'chai'

beforeEach(() => chai.should())

describe('permutation module', function() {

    it('should render no permutation for 0', function () {
        //Given
        const forATooLowNumber = 0
        //when
        //then
        //theResult.should.have.lengthOf(?)
        fail()
    })

    it('should render no permutation for 9', function () {
        //Given
        const forA0MappingNumber = 9
        //when
        //then
        fail()
    })

    it('should not understand a number with unauthorized digits as in 912', function () {
        //Given
        const forANumberContaining1DigitWithoutPermutation = 912
        //when
        //then
        fail()
    })

    it('should render 162 permutations for 432', function () {
        //Given
        const forAReasonableNumber = 432
        //when
        //then
        fail()
    })
})