[first, last] =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.map(fn value ->
    value |> String.trim() |> String.to_integer()
  end)
  |> Enum.sort(:asc)

for value <- (first + 1)..(last - 1) do
  if(rem(value, 5) == 2 || rem(value, 5) == 3) do
    IO.puts("#{value}")
  end
end
