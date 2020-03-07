def windowed_max_range(arr,window_size)
  i = 0
  j = i + (window_size - 1)
  maximum = 0
  while j < arr.length
    if arr[i..j].max - arr[i..j].min > maximum
      maximum = arr[i..j].max - arr[i..j].min
    end
    i += 1
    j += 1
  end
  maximum
end

p windowed_max_range([1, 0, 2, 5, 4, 8], 2) #== 4 # 4, 8
p windowed_max_range([1, 0, 2, 5, 4, 8], 3) #== 5 # 0, 2, 5
p windowed_max_range([1, 0, 2, 5, 4, 8], 4) #== 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) #== 6 # 3, 2, 5, 4, 8

#

class MyQueue
  def initialize
    @queue = []
  end

  def enqueue(ele)
    @queue.push(ele)
  end

  def dequeue
    @queue.shift
  end

  def peak
    @queue[0]
  end
  def size
    @queue.length
  end
  def empty?
    @queue.empty?
  end
end

class MyStack
  def initialize
    @store = []
  end

  def push(ele)
    @store.push(ele)
  end

  def pop
    ele = @store.pop
  end

  def peek
    @store[-1]
  end

  def size
    @store.length
  end

  def empty?
    @store.empty?
  end

end


class StackQueue
  def initialize
      @stk_1 = MyStack.new
      @stk_2 = MyStack.new
  end

  def size
    @stk_2.size
  end
  def empty?
    @stk_2.empty? 
  end
  def enqueue(ele)
    until @stk_2.empty?     
      stk_1.push(@stk_2.pop)
    end
    @stk_2.push(ele)
    until @stk_1.empty?     
      stk_2.push(@stk_1.pop)
    end
  end
  def dequeue
    @stk_2.pop
  end
end

class MinMaxStack
  def initialize
    @store = []
    @max = {}
    @current_max_key = 0
    @min = {}
    @current_min_key = 0
  end
  def max
    @max[current_max_key]
  end

  def min
    @min[current_min_key]
  end

  def push(ele)
    if @store.empty?
      @max[@current_max_key] = ele
      @current_max_key += 1
      @min[@current_min_key] = ele
      @current_min_key += 1
    elsif
      ele >= @max[@current_max_key]
      @max[@current_max_key] = ele
      @current_max_key += 1
    elsif
       ele <= @min[@current_min_key]
       @min[@current_min_key] = ele
      @current_min_key += 1
    end
    @store.push(ele)
  end

  def pop
    ele = @store.pop
    if ele == @max[@current_max_key]
      @current_max_key -= 1
    end
    if ele == @min[@current_min_key]
      @current_min_key -= 1
    end
  end

  def peek
    @store[-1]
  end

  def size
    @store.length
  end

  def empty?
    @store.empty?
  end
end

def MinMaxStackQueue

end