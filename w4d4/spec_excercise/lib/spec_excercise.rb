def my_uniq(arr)
  res = []
  arr.each do |ele|
    res << ele unless res.include?(ele)
  end
  res
end

class Array

  def two_sum
    res = []
    (0...length).each do |i|
      (i+1...length).each do |j|
         if self[i]+ self[j] == 0
          res << [i,j]
        end
      end
    end
    res
  end

end
def my_transpose(arr)
  new_arr = Array.new(arr[0].length) {Array.new(arr.length)}
  (0...arr.length).each do |i|
    (0...arr[0].length).each do |j|
    new_arr[j][i] = arr[i][j]
    end
  end
  new_arr 
end

def stk_pkr(arr)
  raise"I CAN'T SELL THESE STOCK" unless arr.is_a?(Array)
  max = 0
  res = []
  (0...arr.length).each do |i|
    (i+1...arr.length).each do |j|
      if arr[j] - arr[i] > max
        max = arr[j] - arr[i]
        res = [i,j]
      end
    end
  end
  res

  
end