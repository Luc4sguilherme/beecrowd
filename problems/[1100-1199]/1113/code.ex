numbers =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.map(fn values ->
    values
    |> String.trim()
    |> String.split(" ")
    |> Enum.map(fn value -> String.to_integer(value) end)
  end)

for [x, y] <- numbers, x != y do
  cond do
    x < y -> IO.puts("Crescente")
    x > y -> IO.puts("Decrescente")
  end
end
