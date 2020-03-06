# @cards[]
# @junk_pile[]
#shuffle
#draw(numer_of_cards)
class Deck
    def initialize
      @cards=[]
      @junk_pile=[]
      make_shuffled_deck
    end
    def draw
      
    end

    def shuffle

    end




private
  def make_shuffled_deck
    arr =[]
    [2, 3, 4, 5, 6, 7, 8, 9, 10,:J,:Q,:K,:A].each do |val|
      ["♤","♡","♧","♢"].each do |suit|
        arr << Card.new(suit,val)
      end
    end
    @cards = arr.shuffle
  end

end

