count_positive_numbers = fn numbers ->
  Enum.count(numbers, fn x -> x > 0 end)
end

numbers =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.map(fn x -> Float.parse(x) |> elem(0) end)

positive_numbers = count_positive_numbers.(numbers)

IO.puts("#{positive_numbers} valores positivos")
