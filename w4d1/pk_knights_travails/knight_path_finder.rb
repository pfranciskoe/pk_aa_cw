require_relative "polyTreeNode.rb"
class KnightPathFinder
    attr_reader :considered_pos, :root_node
    def initialize(pos_arr)
        @position = pos_arr
        @root_node = PolyTreeNode.new(pos_arr)
        @considered_pos = [pos_arr]
    end

    def find_path(target_position)
        target_node = @root_node.bfs(target_position)
        self.trace_back_path(target_node)
    end

    def trace_back_path(target_node)
        path = [target_node.position]
        current_node = target_node
        while current_node.position != @root_node.position
            path.unshift(current_node.parent.position)
            current_node = current_node.parent
        end
        path
    end
    

    def self.valid_moves(pos)
        x = pos[0]
        y = pos[1]
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
        until queue.empty?
            parent_node = queue.shift # dequeue new parent node to look at -- node instance
            parent_pos = parent_node.position #find parent node's position -- array
            new_moves = new_move_positions(parent_pos)
            new_moves.each do |pos| # iterating over children pos
                child = PolyTreeNode.new(pos) #creating children
                parent_node.add_child(child) # assigning children to parent
                queue << child # adding child pos to queue
            end 
        end
    end
end
# kpf.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]