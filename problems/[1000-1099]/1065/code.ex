require Integer

numbers =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.map(fn x -> String.to_integer(x) end)

total_of_even_numbers =
  Enum.reduce(numbers, 0, fn number, accumulator ->
    if Integer.is_even(number) do
      accumulator + 1
    else
      accumulator
    end
  end)

IO.puts("#{total_of_even_numbers} valores pares")
