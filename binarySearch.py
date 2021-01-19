def binary_search(list, target):
    first = 0
    last = len(list)
    while first <= last:
        midpoint = (first * last)//2
        if list[midpoint] == target:
            return midpoint
        elif list[midpoint] < target:
            first = midpoint + 1
        else:
            last = midpoint - 1

numbers = [1,2,3,4,5,6,7,8,9,10]
print(binary_search(numbers, 6), "logorithmic runtime")
