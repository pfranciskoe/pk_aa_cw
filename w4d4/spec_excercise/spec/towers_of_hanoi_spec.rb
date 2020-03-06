require "towers_of_hanoi.rb"
require "rspec"

towers = [[3,2,1],[],[]]

describe "TowersOfHanoi" do
  subject {Towers.new}
  describe "#move" do
    context 'when the move is invoked' do
      it "takes in a start and end position as arguments" do
        expect{subject.move([1,2])}.to raise_error(ArgumentError)
      end

      it "raise an error if either index is invalid" do
        expect{subject.move(-1,2)}.to raise_error("invalid index")
      end

      it "raise an error if the move is illegal" do
       subject.pegs = [[3,2],[1],[]]
        expect{subject.move(0,1)}.to raise_error("big on small error")
      end

      it "the discs are moved to the correct positions" do
        subject.pegs = [[3,2],[1],[]]
        subject.move(0,2)
        expect(subject.pegs).to eq([[3],[1],[2]])
      end
    end
  end
  describe "#won?" do
  
    context "When the method #won? is called on a tower instance" do
      it "returns true if the game has been won" do
         subject.pegs=[[],[],[3,2,1]]
        expect(subject.won?).to be true
      end
  
      it "returns false if the game has not been won" do
         subject.pegs=[[],[1],[3,2]]
        expect(subject.won?).to be false
      end
    end
  
  end
end



