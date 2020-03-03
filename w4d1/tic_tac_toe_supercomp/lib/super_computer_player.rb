require_relative 'tic_tac_toe_node'

class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    rn = TicTacToeNode.new(game.board, mark)
    arr = []
    rn.children.each do |child|
      return child.prev_move_pos if child.winning_node?(mark)
      arr << child if !child.losing_node?(mark)
    end
    narr = []
    arr.each do |child|
      return child.prev_move_pos if child.winning_node?(mark)
      narr << child.prev_move_pos if !child.losing_node?(mark)
    end
    raise "hell" if narr.length == 0
    narr.sample
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end
