

merge:: Ord a => [a] -> [a] -> [a]
merge [] []=[]
merge a [] = a
merge [] a = a
merge (a:as) (b:bs) | a > b = b : merge (a:as) bs
merge (a:as) (b:bs) | otherwise = a : merge as (b:bs)
