is_divisible_by_13 = fn number ->
  rem(number, 13) == 0
end

get_sum_of_all_numbers_not_divisible_by_13 = fn range ->
  range
  |> Enum.to_list()
  |> Enum.reduce(0, fn value, accumulator ->
    if(not is_divisible_by_13.(value)) do
      value + accumulator
    else
      accumulator
    end
  end)
end

[first, last] =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.map(fn value ->
    value
    |> String.trim()
    |> String.to_integer()
  end)
  |> Enum.sort(:asc)

sum = get_sum_of_all_numbers_not_divisible_by_13.(first..last)

IO.puts("#{sum}")
