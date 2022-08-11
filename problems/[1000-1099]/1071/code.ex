require Integer

list_odd_numbers = fn range ->
  range
  |> Enum.to_list()
  |> Enum.filter(fn x -> rem(x, 2) != 0 end)
end

calculate_sum_of_numbers = fn numbers ->
  Enum.sum(numbers)
end

[start_of_range, end_of_range] =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.map(fn x -> String.to_integer(x) end)
  |> Enum.sort(:asc)

odd_numbers =
  list_odd_numbers.(start_of_range..end_of_range)
  |> Enum.filter(fn x -> x != start_of_range && x != end_of_range end)

sum_of_odd_numbers = calculate_sum_of_numbers.(odd_numbers)

IO.puts("#{sum_of_odd_numbers}")
