import pytest
from app import add, subtract, multiply, divide

def test_add():
    assert add(2,30) == 32
    assert add(1,2) == 3
    assert add(2,98) == 100

def test_subtract():
    assert subtract(1,2) == -1
    assert subtract(50,50) == 0

def test_multiply():
    assert multiply(2, 3) == 6
    assert multiply(-2, 3) == -6
    assert multiply(0, 5) == 0

def test_divide():
    assert divide(6, 2) == 3
    assert divide(-6, 2) == -3
    assert divide(5, 2) == 2.5
    with pytest.raises(ValueError):
        divide(1, 0)   