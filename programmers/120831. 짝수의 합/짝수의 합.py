def solution(n):
    if (n < 2):
        return 0
    sum = 0
    for num in range(n + 1):
        if num % 2 == 0:
            sum += num
    return sum