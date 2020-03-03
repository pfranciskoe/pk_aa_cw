require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board # instance of Board, has 2D array as board inside
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator) #self is a node 
      return false if self.board.tied?
      return true if self.board.over? && self.board.winner != evaluator
      return false if self.board.over? && (self.board.winner == evaluator ||
        self.board.winner == nil)
      if self.next_mover_mark == evaluator
        self.children.all? do |child|
          child.losing_node?(evaluator)
        end
      else
        self.children.any? do |child|
          child.losing_node?(evaluator)
        end
      end
      
  end

  def winning_node?(evaluator)
    return true if self.board.over? && self.board.winner == evaluator
    return false if self.board.over? && (self.board.winner != evaluator ||
        self.board.winner == nil)
    if self.next_mover_mark == evaluator
        self.children.all? do |child|
          child.winning_node?(evaluator)
        end
      else
        self.children.any? do |child|
          child.winning_node?(evaluator)
        end
      end
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    new_children = []
    @board.rows.each.with_index do |row, i|
      row.each.with_index do |ele, j|
        if @board.empty?([i, j])
          new_board = @board.dup
          new_board[[i,j]] = @next_mover_mark
          if @next_mover_mark == :x
            mark = :o
          else
            mark = :x
          end
          new_child = TicTacToeNode.new(new_board, mark, [i,j])
          new_children << new_child
        end
      end
    end
    new_children
  end
end
