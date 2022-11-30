// describe : 테스트 할 유닛들의 모음
describe( '자스민 테스트입니다.',()=>{
  // it : 함수의 테스트 유닛
  it('더하기 1을 하는 함수입니다.',()=>{
    const num = 30;


    // expect : 기대식
    expect(plusOne(num)).toBe(num+1) 
  })

})