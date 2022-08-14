require Integer

range_not_inclusive = fn first, last ->
  first..last
  |> Enum.reject(fn value -> value == first || value == last end)
end

calculate_sum_of_odd_numbers = fn range ->
  range
  |> Enum.to_list()
  |> Enum.reduce(0, fn value, accumulator ->
    if Integer.is_odd(value) do
      accumulator + value
    else
      accumulator
    end
  end)
end

ranges =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.drop(1)
  |> Enum.map(fn values ->
    values
    |> String.trim()
    |> String.split(" ")
    |> Enum.map(fn value -> String.to_integer(value) end)
    |> Enum.sort(:asc)
  end)

sums =
  ranges
  |> Enum.map(fn [first, last] ->
    range_not_inclusive.(first, last)
    |> calculate_sum_of_odd_numbers.()
  end)

sums |> Enum.each(fn sum -> IO.puts("#{sum}") end)
