class PolyTreeNode

    attr_reader :parent, :children, :position
    def initialize(position)
        @position = position
        @parent = nil
        @children = []
    end

    def parent=(node)
        @parent.children.delete(self) if @parent != nil
        @parent = node
        if node.nil? 
            return
        end
        node.children << self if !node.children.include?(self)
    end

    def add_child(child)
        child.parent = self
    end

    def remove_child(child)
        raise "node is not a child" if !@children.include?(child)
        child.parent = nil
    end
    
    def dfs(position)
        return self if self.position == position
        children.each do |child|
            results = child.dfs(position)
            return results if results != nil
        end
        nil
    end

    def bfs(position)
        queue = [self]
        until queue.empty?
            front_of_line = queue.shift
            if front_of_line.position == position
                return front_of_line
            end
            front_of_line.children.each {|child| queue << child}
        end
        nil
    end
end