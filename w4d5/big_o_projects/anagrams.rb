def first_anagram?(first_word,second_word) #time = O(n*n!)
  perms = first_word.split("").permutation.to_a
  perms.any? do |ele|
    ele == second_word.split('')
  end
end


def second_anagram?(first_word,second_word) # quadratic time complexity
  sec_arr = second_word.chars
  first_word.each_char.with_index do |char,idx|
    if sec_arr.include?(char)
    sec_idx = sec_arr.find_index(char)
    sec_arr.delete_at(sec_idx)
    end
  end
  sec_arr.empty?
end


def third_anagram?(first_word, second_word) # n log n loglinear
  first_word.chars.sort == second_word.chars.sort
end
p third_anagram?("gizmo", "sally")    #=> false
p third_anagram?("elvis", "lives")    #=> true

def fourth_anagram?(first_word, second_word) #O(n)
  hash = Hash.new{|h,k| h[k] = [0,0]}
  first_word.chars.each do |char|
    hash[char][0] += 1 
  end
  second_word.chars.each do |char|
    hash[char][1] += 1
  end
  hash.all? do |k, v|
    v[0] == v[1]
  end
end

p fourth_anagram?("gizmo", "sally")    #=> false
p fourth_anagram?("elvis", "lives")    #=> true