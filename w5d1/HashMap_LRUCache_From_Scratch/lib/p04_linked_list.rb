
class Node
  attr_reader :key
  attr_accessor :val, :next, :prev
  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  include Enumerable
  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
     @head.next == @tail
  end

  def get(key)
    self.each do |ele|
      return ele.val if ele.key == key
    end
    nil
  end

  def include?(key)
    self.each do |ele|
      return true if ele.key == key
    end
    false
  end

  def append(key, val)
    new_node = Node.new(key,val)

    new_node.prev = @tail.prev
    @tail.prev.next = new_node
    @tail.prev = new_node
    new_node.next = @tail
  end

  def update(key, val)
    self.each do |node|
      node.val = val if node.key == key
    end
  end

  def remove(key)
     self.each do |ele|
        if ele.key == key
          ele.next.prev = ele.prev
          ele.prev.next = ele.next
        end
      end
  end

  def each(&prc)
    i = first
    until i.val == nil
      prc.call(i)
      i = i.next
    end
    self
  end

  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
