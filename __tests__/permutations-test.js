import permutationFunction from '../src/index'
import chai from 'chai'

beforeEach(() => chai.should())

describe('permutation module', function() {

    it('should render no permutation for 0', function () {
        //Given
        const forATooLowNumber = 0
        //when
        const theResult = permutationFunction(forATooLowNumber)
        //then
        theResult.should.have.lengthOf(0)
    })

    it('should render no permutation for 9', function () {
        //Given
        const forA0MappingNumber = 9
        //when
        const theResult = permutationFunction(forA0MappingNumber)
        //then
        theResult.should.have.lengthOf(0)
    })

    it('should not understand a number with unauthorized digits as in 912', function () {
        //Given
        const forANumberContaining1DigitWithoutPermutation = 912
        //when
        const theResult = permutationFunction(forANumberContaining1DigitWithoutPermutation)
        //then
        theResult.should.have.lengthOf(0)
    })

    it('should render 162 permutations for 432', function () {
        //Given
        const forAReasonableNumber = 432
        //when
        const theResult = permutationFunction(forAReasonableNumber)
        //then
        theResult.should.have.lengthOf(162)
    })
})