module Main where

import Sort

main :: IO ()
main = do
  print "Hello World"
  xs <- getLine
  putStrLn ("You said: " ++ xs)
