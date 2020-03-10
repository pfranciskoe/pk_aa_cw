class MaxIntSet
  attr_reader :store
  def initialize(max)
    @store = Array.new(max+1,false)
    @max = max
  end

  def insert(num)
    raise "Out of bounds" if (num > @max || num < 0)
    @store[num] = true
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    return @store[num]
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
  self[num].include?(num)
  end

  private

  def [](num)
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if @count == num_buckets - 1
      resize!
    end
    if !self.include?(num)
      self[num] << num 
      @count += 1
    end
  end

  def remove(num)
    if self.include?(num)
      self[num].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    @store[num % num_buckets]
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
