class Towers
  attr_accessor :pegs
  def initialize
    @pegs = [[3,2,1],[],[]]
  end
  def valid_move?(start_pos,end_pos)
    raise "invalid index" unless (0...3).include?(start_pos) && 
                                  (0...3).include?(end_pos)
    raise "no peg to move" if @pegs[start_pos].empty?
    raise "big on small error" unless @pegs[end_pos].empty? || 
    @pegs[start_pos].last < @pegs[end_pos].last
    true
  end
  def move(start_pos,end_pos)
    if valid_move?(start_pos,end_pos)
      @pegs[end_pos] << @pegs[start_pos].pop
    end
  end

  def won?
    @pegs[0].empty? && @pegs[1].empty? && @pegs[2] == [3,2,1]
  end

end