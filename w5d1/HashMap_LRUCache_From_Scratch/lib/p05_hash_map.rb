require_relative 'p04_linked_list'

class HashMap
  attr_accessor :count
  include Enumerable
  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    @store.each do |buck|
      return true if buck.include?(key)
    end
    false
  end

  def set(key, val)
    if count == num_buckets - 1
      resize!
    end
    if include?(key)
      delete(key)
    end
    @store[bucket(key)].append(key,val)
    @count += 1
  end

  def get(key)
   @store[bucket(key)].get(key)
  end

  def delete(key)
     if include?(key)
      @count -= 1
      end
    @store[bucket(key)].remove(key)

  end

  def each(&prc)
    @store.each do |ele|
      ele.each do |node|
          prc.call(node.key,node.val)
      end
    end
    self
  end

  # uncomment when you have Enumerable included
  # def to_s
  #   pairs = inject([]) do |strs, (k, v)|
  #     strs << "#{k.to_s} => #{v.to_s}"
  #   end
  #   "{\n" + pairs.join(",\n") + "\n}"
  # end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    arr = []
    @store.each {|buk| buk.each {|ele| arr << ele}}
    @store = Array.new((@count+1)*2) { LinkedList.new }
    arr.each {|ele| @store[bucket(ele.key)].append(ele.key,ele.val) }
  end

  def bucket(key)
    (key.hash % @store.length)
  end
end
