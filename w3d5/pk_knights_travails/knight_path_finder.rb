require_relative "polyTreeNode.rb"

class KnightPathFinder
    attr_reader :considered_pos
    def initialize(pos_arr)
        @position = pos_arr
        @root_node = PolyTreeNode.new(pos_arr)
        @considered_pos = [pos_arr]
    end

    def find_path(target_position)
        
    end

    def self.valid_moves(pos)
        y = pos[0]
        x = pos[1]
        all_moves =[[x-1,y+2],[x+1,y+2],[x-1,y-2],[x+1,y-2],
        [x-2,y+1],[x+2,y+1],[x-2,y-1],[x+2,y-1]]
        all_moves.select do |position|
            (0...8).include?(position[0]) &&
            (0...8).include?(position[1])
        end
    end

    def new_move_positions(pos)
        valid_moves = KnightPathFinder.valid_moves(pos).reject do |el| 
            @considered_pos.include?(el)
        end
        @considered_pos += valid_moves
        valid_moves
    end

    def build_move_tree
        queue = [@root_node]
        count = 0
        until queue.empty?
            parent_node = queue.shift # parent_pos
            parent_pos = parent_node.position #creating parent node
            new_move_positions(parent_pos).each do |el| # iterating over children pos
                child = PolyTreeNode.new(el)  #creating children
                count +=1
                parent_node.add_child(child) # assigning children to parent
                queue << child # adding child pos to queue
            end 
        end
        return count
    end
end
