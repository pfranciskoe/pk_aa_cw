# class Integer
#   # Integer#hash already implemented for you
# end

# class Array
#   def hash
#     code = "H1yBv4gYq6MhUtlVwF57LXaRsG2pzI9xPmrA8jKDZfENn30SJTuCOcdeiQokbW"
#     array = [1,3,4,5,3,2]
#     self.each do |ele|
#       if ele.is_a?(String)
#         ele.each_char.with_index do |char,idx|
#           array[idx % 6] = (code.index(char) % 9)
#         end
#       else
#         array[ele * (ele^2) % 6] = ((code.index(ele.to_s[0])-68) + (code.index(ele.to_s[-1])+22)+1) % 10
#       end
#     end
#     array
#   end
# end

# class String
#   def hash
#     self.split('').reverse.hash
#   end
# end

# class Hash
#   This returns 0 because rspec will break if it returns nil
#   Make sure to implement an actual Hash#hash method
#   def hash
#     h = self.sort_by {|k,v| k}
#     code = "H1yBv4gYq6MhUtlVwF57LXaRsG2pzI9xPmrA8jKDZfENn30SJTuCOcdeiQokbW"
#     array = [1,3,4,5,3,2]
#     h.each do |k,v|
#         array[code.index(k[0].to_s) % 6] = ((code.index(v[0].to_s)+22)+1) % 10
#     end
#     array
#   end
# end
