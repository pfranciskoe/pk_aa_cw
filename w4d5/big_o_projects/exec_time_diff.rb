def my_min(list) #time complexity is n^2
  min = list[0]
  list.each_with_index do |ele,i|
    list.each_with_index do |ele2,j|
      if i != j && ele < min
        min = ele
      end
    end
  end
  min
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]


def my_min2(list) #time complexity is n
  min = list[0]
  list.each_with_index do |ele2,j|
    if ele2 < min
      min = ele2
    end
  end
  min
end
# p my_min2(list)

# def largest_contiguous_subsum(list)
#   arr = []
#   (0...list.length).each do |i|
#     (0...list.length).each do |j|
#       if i < j
#         arr << list[i..j]
#       end
#     end
#   end
#   arr.map(&:sum).max
# end


list = [2, 3, -6, 7, -6, 7,1,100,3,2,3,4,123,42,,432,2,]


def largest_contiguous_subsum(list)
  max_sum = list[0]
  i = 0
  current_sum = 0
  while i < max.length
    current_sum += list[i]
    max_sum =current_sum if current_sum > max_sum
    current_sum = 0 if current_sum < 0

end

p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])max - arr[-1]