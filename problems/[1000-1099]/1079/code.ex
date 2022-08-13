calculate_weighted_average = fn [n1, n2, n3] ->
  (n1 * 2 + n2 * 3 + n3 * 5) / 10
end

parse_string_as_float = fn value ->
  value |> String.trim() |> Float.parse() |> elem(0)
end

parse_mantissa = fn value, mantissa ->
  :erlang.float_to_binary(value, decimals: mantissa)
end

IO.read(:stdio, :all)
|> String.trim()
|> String.split("\n")
|> Enum.drop(1)
|> Enum.map(fn numbers ->
  numbers
  |> String.split(" ")
  |> Enum.map(fn number -> parse_string_as_float.(number) end)
end)
|> Enum.each(fn numbers ->
  calculate_weighted_average.(numbers)
  |> parse_mantissa.(1)
  |> IO.puts()
end)
