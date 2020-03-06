require "spec_excercise"
require "rspec"

describe '#my_uniq' do
  context 'when passed an Array with duplicates' do
    it 'returns an array with no duplicate values' do
      expect(my_uniq([1,2,1,3,3])).to eq([1,2,3])
    end
  end
  context 'when passed an Array without dups' do
    it 'returns an identical Array' do
      expect(my_uniq([1,2,3])).to eq([1,2,3])
    end
  end
end

describe 'Array#two_sum' do
  context 'when given an Array of positive and negative Integers' do
    it 'returns an Array of pairs of indices that have elements that sum to zero' do
      expect([-1, 0, 2, -2, 1].two_sum).to include([0,4], [2, 3])
    end
    it 'returns the indices in ascending order from left to right' do
      expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
    end

  end
end

describe '#my_transpose' do
  let(:arr) {[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]}
  context 'when given a "square" 2d array as an argument' do

    it 'returns an array of the same dimensions' do
      expect(my_transpose(arr).length).to eq(arr.length)
      expect(my_transpose(arr)[0].length).to be(arr[0].length)
    end

    it 'returns the array with rows and columns switched'do
      expect(my_transpose(arr)).to eq([[0, 3, 6],[1, 4, 7],[2, 5, 8]])
    end
  end
end

describe "#stk_pkr" do
  let(:arr) {[12,3,3,5,500,8,4,1]}
  context "when passed an array containing stock prices over time" do

    it "throws an 'I CAN'T SELL THESE STOCK' error if the argument is not an Array" do
      expect{stk_pkr("money me please")}.to raise_error('I CAN\'T SELL THESE STOCK')
    end

    it "returns an array containing two indices" do
      expect(stk_pkr(arr).length).to be(2)
    end

    it "returns the indices in chonological order" do
       expect(stk_pkr(arr)[0]).to be < stk_pkr(arr)[1]
    end

    it "returns indices corresponding to the greatest possible profit" do
      expect(stk_pkr(arr)).to eq([1,4])
    end

    it "in the case of a tie, it returns the array with the first buy and sell date" do
      expect(stk_pkr(arr)).to_not eq([2,4])
      expect(stk_pkr(arr)).to eq([1,4])


    end

  end


end