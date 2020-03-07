








































def two_sum?(arr,target)
  hash = Hash.new(false)
  arr.each do |ele|
    if hash[target - ele] == true
      return true
    else
      hash[ele] = true
    end
  end
  false
end



# arr = [1,3,4,-8,5,6,7,3,2,1]
# target = -1
# p two_sum?(arr,target)
