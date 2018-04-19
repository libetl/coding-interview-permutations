import permutationFunction from '../src/index'
import chai from 'chai'

beforeEach(() => chai.expect)

describe('permutation module', function() {

    it('should render no permutation for 0', function () {
        //Given
        const forATooLowNumber = 0
        //when
        const theResult = permutationFunction(forATooLowNumber);
        //then
        expect(theResult).toEqual([]);
        //fail()
    })

    it('should render no permutation for 9', function () {
        //Given
        const forA0MappingNumber = 9
        //when
        const theResult = permutationFunction(forA0MappingNumber);
        //then
        expect(theResult).toEqual([]);
    })

    it('should render no permutation for 5', function () {
        //Given
        const forA0MappingNumber = 5
        //when
        const theResult = permutationFunction(forA0MappingNumber);
        //then
        expect(theResult).toEqual(['P', 'Q', 'R', 'S']);
    })

        it('should render no permutation for 35', function () {
            //Given
            const forA0MappingNumber = 35
            //when
            const theResult = permutationFunction(forA0MappingNumber);
            //then
            expect(theResult).toEqual(["PGHI", "QGHI", "RGHI", "SGHI"]);
        })
    /*
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
            */
})