require Integer

numbers =
  IO.read(:stdio, 13)
  |> String.trim()
  |> String.split("\n")
  |> Enum.map(fn x -> String.to_integer(x) end)

template = %{:even => 0, :odd => 0, :positive => 0, :negative => 0}

get_total_of_even_and_odd_numbers = fn number, accumulator ->
  cond do
    Integer.is_even(number) -> Map.put(accumulator, :even, accumulator.even + 1)
    Integer.is_odd(number) -> Map.put(accumulator, :odd, accumulator.odd + 1)
    true -> accumulator
  end
end

get_total_of_positive_and_negative_numbers = fn number, accumulator ->
  cond do
    number > 0 -> Map.put(accumulator, :positive, accumulator.positive + 1)
    number < 0 -> Map.put(accumulator, :negative, accumulator.negative + 1)
    true -> accumulator
  end
end

classify_number =
  Enum.reduce(numbers, template, fn number, accumulator ->
    accumulator
    |> (&get_total_of_even_and_odd_numbers.(number, &1)).()
    |> (&get_total_of_positive_and_negative_numbers.(number, &1)).()
  end)

IO.puts("#{classify_number.even} valor(es) par(es)")
IO.puts("#{classify_number.odd} valor(es) impar(es)")
IO.puts("#{classify_number.positive} valor(es) positivo(s)")
IO.puts("#{classify_number.negative} valor(es) negativo(s)")
