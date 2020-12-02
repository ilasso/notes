#!/usr/bin/env python3
"""
this is a decorator example
@decorator
def func():
    pass
 a decorator its like this, exactly the same
func = decorator(func)"""
import pdb


def debug(breakpoint=False):
    def debug_decorator(fun):
        def nadd(*args,**kwargs):
            print(f"Function {fun.__name__}() called!")
            if breakpoint:
                pdb.set_trace()
            return fun(*args, **kwargs) 
        return nadd
    return debug_decorator

@debug(breakpoint=False)
def add(a, b):
    return a + b

@debug()
def neg(n):
    return n * -1

print(add(1,3))
print(neg(-14))

#decoradores como argumentos
