import sys
import random

num_digits = int(sys.argv[1])
value = random.randint(10**num_digits, 10**(num_digits + 1))
value = str(value)[1::]
print(int(value))

#(Math.floor(Math.random() * (10**(n+1) - (10**n - 1)) + 10**n)).toString()