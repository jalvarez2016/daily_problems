# implement a stack to solve this problem
# got the theory down but don't know enough python to implement
# Basic idea is to push opening characters into the stack and pop with matching closings
# Return false when the char is not an opening or matching closing to top of stack

openings = {
    "(" : ")",
    "{" : "}",
    "[" : "]",
}

stack = []

class Solution:
  def isValid(self, s):
      return False
    # for x in s:
    #     print(stack,x)
    #     if (openings[x] == "(" or openings[x] == "[" or openings[x] == "{"):
    #         stack.append(x)
    #         print(x)
    #     elif x == openings[stack.top()]:
    #         stack.pop()
    #     else :
    #         return False
    # return True            

# Test Program
s = "()(){(())" 
# should return False
print(Solution().isValid(s))

s = ""
# should return True
print(Solution().isValid(s))

s = "([{}])()"
# should return True
print(Solution().isValid(s))