require_relative 'p05_hash_map'
require_relative 'p04_linked_list'

class LRUCache
  def initialize(max, prc)
    @map = HashMap.new
    @store = LinkedList.new
    @max = max
    @prc = prc
  end

  def count
    @map.count
  end

  def get(key)
    if !@map.include?(key)
      v = @prc.call(key)
      @store.append(key,v)
      @map.set(key, @store[key])
    else
      @store.remove(key)
      @store.append(key,v)
      @map.set(key, @store[key])
    end
    if @map.length < @max
        eject!
    end
    @map.get(key)
  end

  def to_s
    'Map: ' + @map.to_s + '\n' + 'Store: ' + @store.to_s
  end

  private

  def calc!(key)
    # suggested helper method; insert an (un-cached) key
  end

  def update_node!(node)
    # suggested helper method; move a node to the end of the list
  end

  def eject!
    k = @store.last.key
    @store.remove(k)
    @map.delete(k)
  end
end
