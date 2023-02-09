# problem solving for IT CLUB

# 1

# n = int(input())

# summa = 0
# for i in range(1, n+1):
#     summa += i ** 2


# print(summa)


# 2 Factorial

# 5! = 5*4*3*2*1
# 5! = 1*2*3*4*5

# n2 = int(input())
# res = 1
# for i in range(1, n2+1):
#     res *= i


# print(res)


# Ckn=n!k!(n−k)


# 3
# Напишите программу, вычисляющую 2 N.

# n = int(input())
# print(2 ** n)




# 4

n = int(input())
k = int(input())

def faktorial(a):
    res = 1
    for i in range(1, a+1):
        res *= i
    return res

final = faktorial(n) // (faktorial(k) * faktorial(n-k))
print(final)