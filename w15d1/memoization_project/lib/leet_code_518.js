// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function change(amount,coins){
        let key = amount + '-' + coins
        if (key in memo) return memo[key];
        if (amount === 0) return 1;
        let coin = coins[coins.length - 1];
        let total = 0;
        for (let quant = 0; quant * coin <= amount; quant++) {
                total += change(amount - (quant * coin), coins.slice(0, -1), memo)
        }
        memo[key] = total;
        return memo[key];
}