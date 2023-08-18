function fibonacci(num){
    let nums = [0,1]
    for(let i = 0; i<= num-3; i++)
    {
        nums.push(nums[i]+nums[i+1])
    }
    console.log(nums)
}

fibonacci(10)