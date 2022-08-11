calculate_sum_of_numbers = fn numbers ->
  Enum.reduce(numbers, 0, fn number, accumulator ->
    accumulator + number
  end)
end

get_total_of_numbers = fn numbers ->
  Enum.count(numbers)
end

calculate_average_of_numbers = fn numbers ->
  sum_of_numbers = calculate_sum_of_numbers.(numbers)
  total_of_numbers = get_total_of_numbers.(numbers)

  sum_of_numbers / total_of_numbers
end

get_positive_numbers = fn numbers ->
  Enum.filter(numbers, fn number -> number > 0 end)
end

numbers =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.map(fn x -> Float.parse(x) |> elem(0) end)

parse_mantissa = fn number, mantissa -> :erlang.float_to_binary(number, decimals: mantissa) end

positive_numbers = get_positive_numbers.(numbers)
total_of_positive_numbers = get_total_of_numbers.(positive_numbers)
average_of_positive_numbers = calculate_average_of_numbers.(positive_numbers) |> parse_mantissa.(1)

IO.puts("#{total_of_positive_numbers} valores positivos")
IO.puts("#{average_of_positive_numbers}")
