require "card.rb"
require "deck.rb"
describe "Poker" do
  describe Card do
    subject(:card) {Card.new(:s,:v)}
    describe '#initialize' do
      context 'when a card is initialized' do
        it 'takes in two arguments (value,suit)' do
          expect{Card.new}.to raise_error(ArgumentError)
          expect{Card.new("a","A",'v')}.to raise_error(ArgumentError)       
        end

        it 'sets @value and @suit to thier corresponding values' do
          expect(card.instance_variable_get(:@value)).to eq(:v)
          expect(card.instance_variable_get(:@suit)).to eq(:s)
        end

      end

      describe '#suit' do
        it 'gets the value of @suit' do
          expect(card.suit).to eq(:s)
        end
      end

      describe '#value' do
        it 'gets the value of @value' do
          expect(card.value).to eq(:v)
        end
      end

      describe '#suit=' do
        it 'suit setter should not be defined' do
          expect{card.suit = 2}.to raise_error(NoMethodError)
        end
      end

      describe '#value=' do
        it 'value setter should not be defined' do
          expect{card.value = 2}.to raise_error(NoMethodError)
        end
      end
      

    end
  end

  describe Deck do
    subject(:deck) {Deck.new}
    describe '#initialize' do
      it 'should not accept any arguments' do
        expect{Deck.new('teckdeck')}.to raise_error(ArgumentError)
      end

      it 'the instance should have an instance variable @cards' do
         expect(deck.instance_variable_get(:@cards)).to be_truthy
      end

      it '@cards should be an array containing 52 Card instances' do
          expect(deck.instance_variable_get(:@cards).length).to be(52)
          expect(deck.instance_variable_get(:@cards).all?{|ele| ele.is_a?(Card)})
          .to be(true) 
      end
      it '@cards should not have any repeat cards' do
          expect(deck.instance_variable_get(:@cards).uniq).to eq(deck.instance_variable_get(:@cards))
      end


      it 'the instance should have an instance variable @junk_pile' do
        expect(deck.instance_variable_get(:@junk_pile)).to be_truthy
      end
      it '@junk_pile should be initialized as an empty array' do
        expect(deck.instance_variable_get(:@junk_pile)).to eq([])
      end

    end
    describe '#draw' do
      it 'it can take a quantitiy argument' do
        expect(deck.draw(1)).to_not raise_error
      end

      it 'will raise and error if too many cards are requested'

      it 'if no argument is given it will default to 5'

      it 'will return the card(s) from the top of the deck'

      it 'the deck with no longer contain given cards'

    end
  
  end

# @cards[]
# @junk_pile[]
#shuffle
#draw(numer_of_cards)





end

# Card(suit,value)
#   @value
#   @suit
#   :suit
#   :symbol
#   :value
