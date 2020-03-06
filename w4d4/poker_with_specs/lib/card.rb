
class Card
  attr_reader :suit, :value
  def initialize(suit,value)
    @suit = suit
    @value = value
  end

  def ==(other_card)
    self.suit == other_card.suit && self.value == other_card.value
  end
end

# Card(suit,value)
#   @value
#   @suit
#   :suit
#   :symbol
#   :value

#  [2, 3, 4, 5, 6, 7, 8, 9, 10 ,:J,:Q,:K,:A]
# "♤","♡","♧","♢"