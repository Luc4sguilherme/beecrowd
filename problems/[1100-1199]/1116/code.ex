parse_mantissa = fn value, mantissa ->
  :erlang.float_to_binary(value, decimals: mantissa)
end

division = fn x, y ->
  if y == 0 do
    "divisao impossivel"
  else
    (x / y) |> parse_mantissa.(1)
  end
end

IO.read(:stdio, :all)
|> String.trim()
|> String.split("\n")
|> Enum.drop(1)
|> Enum.map(fn values ->
  values
  |> String.trim()
  |> String.split(" ")
  |> Enum.map(fn value -> String.to_integer(value) end)
end)
|> Enum.each(fn [x, y] ->
  division.(x, y)
  |> IO.puts()
end)
