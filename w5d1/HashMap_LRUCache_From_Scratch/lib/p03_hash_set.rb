class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    if @count == num_buckets - 1
      resize!
    end
    self[key] << key.hash
    @count += 1
  end

  def include?(key)
    self[key].include?(key.hash)
  end

  def remove(key)
    if self.include?(key)
      self[key].delete(key.hash)
      @count -= 1
    end
  end

  private

  def [](num)
    @store[num.hash % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    arr = []
    @store.each {|buk| buk.each {|ele| arr << ele}}
    @store = Array.new((@count+1)*2) { Array.new }
    arr.each {|ele| self[ele] << ele }
  end
end
