module HW8 where

import System.Random


main:: IO ()
main = do
    n <- randomRIO (1,10 :: Int)
    print n
    check n



check:: Int -> IO()
check n = do
    print "Guess a number between 1-10"
    numstring <- getLine
    let guess = read numstring :: Int
    print guess
--    function guess
--         | guess < n  = putStrLn "Your guess was too low"
--         | guess > n  = putStrLn "Your guess was too high"
--         | guess == n = putStrLn "You're right!"
   if guess < n
	    then do putStrLn "Your guess was too low"
           check n
	    else if guess > n
	              then do putStrLn "Your guess was too high"
                        check n
   		          else putStrLn "You're right!"
