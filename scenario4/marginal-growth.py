import math
import matplotlib.pyplot as plt
import numpy as np

def calculate_marginal_growth(investment_amount):
    """
    Calculate how much additional return you get from adding one more
    dollar to your investment, assuming returns follow a square root model.
    
    This uses the formula sqrt(x + 1) - sqrt(x) to determine the
    diminishing marginal return of each additional dollar invested.
    
    Args:
        investment_amount: Current investment amount in dollars
        
    Returns:
        float: The marginal growth from adding one more dollar
    """
    return math.sqrt(investment_amount + 1) - math.sqrt(investment_amount)


def plot_marginal_returns():
    """
    Plot how the marginal returns diminish as investment amount increases.
    """
    investments = list(range(1, 10001, 100))
    marginal_returns = [calculate_marginal_growth(x) for x in investments]
    
    plt.figure(figsize=(10, 6))
    plt.plot(investments, marginal_returns)
    plt.title('Diminishing Marginal Returns on Investment')
    plt.xlabel('Investment Amount ($)')
    plt.ylabel('Marginal Return of Next $1 Invested')
    plt.grid(True)
    plt.show()


def investment_example():
    """
    Show a real-world example of using sqrt(x + 1) - sqrt(x) in financial modeling.
    """
    # Initial investment amounts to compare
    investment_amounts = [100, 1000, 10000, 100000]
    
    print("Diminishing Marginal Returns Example:")
    print("-------------------------------------")
    print("This model shows how each additional dollar invested yields")
    print("smaller returns as your total investment grows.\n")
    
    for amount in investment_amounts:
        marginal_return = calculate_marginal_growth(amount)
        print(f"With ${amount:,} invested:")
        print(f"  Marginal return of next $1: {marginal_return:.6f}")
        print(f"  Percentage return: {marginal_return * 100:.6f}%\n")
    
    # Show how much you need to invest to get the same return as $1 at different levels
    base_return = calculate_marginal_growth(1000)
    
    for multiplier in [2, 5, 10]:
        target_return = base_return / multiplier
        
        # Find investment amount needed to achieve target return
        # This requires solving: sqrt(x + 1) - sqrt(x) = target_return
        # Which gives: x = (1 - (target_return)^2) / (4 * (target_return)^2)
        needed_investment = (1 - target_return**2) / (4 * target_return**2)
        
        print(f"To get {1/multiplier:.1f}x the marginal return of $1,000:")
        print(f"  You would need to invest ${needed_investment:,.2f}\n")


if __name__ == "__main__":
    investment_example()
    plot_marginal_returns()